package tools;

// use this for macros or other classes
import haxe.macro.Type;
import haxe.macro.*;
import haxe.ds.Option;

class MacroMerge {
	#if macro
	static function reassemble(t:TypedExpr):Expr {
		return switch t.expr {
			case TParenthesis(t) | TCast(t = {expr: TObjectDecl(_)}, _): reassemble(t);
			case TObjectDecl(fields):
				{
					expr: EObjectDecl([for (f in fields) {field: f.name, expr: reassemble(f.expr)}]),
					pos: t.pos,
				}
			default: Context.storeTypedExpr(t);
		}
    }

	static function getFields(e:Expr) {
		return switch e {
			case {expr: EObjectDecl(fields)}: Some(fields);
			case Context.typeExpr(_).expr => TField(_, FStatic(_, r) | FInstance(_, _, r)):
				getFields(reassemble(r.get().expr()));
			default: None;
		}
    }

	static function doMerge(values:Array<Expr>, ?mandatory:Bool):Expr {
        var val = values[values.length - 1];
		return switch getFields(val) {
			case Some(_):
				var merged = new Map();
				for (v in values) {
					switch getFields(v) {
						case Some(fields):
							for (f in fields)
								switch merged[f.field] {
									case null: merged[f.field] = [f.expr];
									case parts: parts.push(f.expr);
								}
						default:
							Context.fatalError('Object expected found $val', v.pos);
					}
                }

				{
					pos: Context.currentPos(),
					expr: EObjectDecl([
						for (f in merged.keys())
							{
								field: f,
								expr: doMerge(merged[f])
							}
					])
				}
			default:
				if (mandatory) Context.fatalError('Object expected found $val', Context.currentPos()); else values[values.length - 1];
		}
    }
	#end

	static macro public function merge(values:Array<Expr>) {
		return doMerge(values, true);
    }
}
