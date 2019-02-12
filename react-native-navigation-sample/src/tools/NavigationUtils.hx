package tools;

#if macro
import haxe.macro.Context;
import haxe.macro.Expr;
import tools.MacroMerge;
#else
import tools.MacroMerge;
import react.Partial;
import react.ReactComponent;
import react.native.navigation.Navigation;
import react.native.navigation.AnimationsOptions;
import react.native.navigation.NavigationOptions;
#end
import react.native.navigation.NavProps;

class NavigationUtils {

    @:access( tools.MacroMerge.doMerge )
    macro static public function mergeDefOptions<T:NavProps>(comp:ExprOf<ReactComponentOfProps<T>>, expr : ExprOf<NavigationOptions>) 
    {
        var exprDefault:Expr = macro NavigationUtils.defaultOptions;
        return MacroMerge.doMerge([exprDefault, expr], true);
    }

#if !macro
	static public function navPop<T:NavProps>(comp:ReactComponentOfProps<T>) 
    {
		Navigation.pop(comp.props.componentId);
	}

	static public function navPush<T:NavProps>(comp:ReactComponentOfProps<T>, route:String, propsToPass:Dynamic, ?options:Partial<NavigationOptions>) {
		//var o = defaultOptions;
		//if (options != null)
		//	o = merge(defaultOptions, options);
        //trace(o);
        trace(options);
        trace(haxe.Json.stringify(options));
		Navigation.push(comp.props.componentId, {
			component: {
				name: route,
				passProps: propsToPass,
				options: options,
			}
		});
	}

	static public function navDismissModal<T:NavProps>(comp:ReactComponentOfProps<T>) {
		Navigation.dismissModal(comp.props.componentId);
	}

	static public function navModalAsOverlay<T:NavProps>(comp:ReactComponentOfProps<T>, route:String, ?propsToPass:Dynamic, ?options:Partial<NavigationOptions>) {
		var overlayOptions:Partial<NavigationOptions> = {
			layout : {
                backgroundColor: 'transparent',
            },
			modalPresentationStyle: OverCurrentContext,
			animations: {
				showModal: {
					enabled: false,
                    waitForRender : false,
				},
				dismissModal: {
					enabled: false
				},
			},
		};
        
        //var o = overlayOptions;
        //if( options != null ) o = merge(overlayOptions, options);

		Navigation.showModal({
			component: {
				name: route,
				passProps: propsToPass,
				options: options,
			}
		});

        haxe.Timer.delay(function() {
            Navigation.dismissAllModals({
                animations: {
                    dismissModal: {
                        enabled : false,
                        waitForRender : true,
                    }
                }
            });
        }, 2000);
    }

	static public function navShowOverlay<T:NavProps>(comp:ReactComponentOfProps<T>, route:String, ?propsToPass:Dynamic, ?options:Partial<NavigationOptions>) {
		//var def:NavigationOptions = {overlay: {interceptTouchOutside: true}};

		Navigation.showOverlay({
			component: {
				name: route,
				passProps: propsToPass,
				options: options,
			}
		});

		if (options != null)
			Navigation.mergeOptions(comp.props.componentId, options);
	}

	static public function navDismissOverlay<T:NavProps>(comp:ReactComponentOfProps<T>) {
		Navigation.dismissOverlay(comp.props.componentId);
	}

	static public var defaultOptions:NavigationOptions = {
		layout: {
			componentBackgroundColor: '#e8e8e8',
			orientation: [Portrait],
		},
        topBar: {
            backButton: {
                showTitle: false
            }
        },
		animations: {
			setRoot: {
				alpha: {
					from: 0,
					to: 1,
					duration: 300
				}
			},
			push: {
                waitForRender: true,
                enabled: true,
				content: {
                    //startAlpha : 0,
                    //endAlpha : 1,
                    //duration : 2,
                    //interpolation: Accelerate
                    
					y: {
						from: 1000,
						to: 0,
						duration: 500,
						interpolation: Accelerate,
					},
					alpha: {
						from: 0,
						to: 1,
						duration: 500,
						interpolation: Accelerate,
					}
                   
				}
			},
			pop: {
                waitForRender: false,
                enabled: false,
				topBar: {
					id: 'TEST',
					alpha: {
						from: 1,
						to: 0,
						duration: 500,
						interpolation: Accelerate,
					}
				},
				content: {
					y: {
						from: 0,
						to: 1000,
						duration: 500,
						interpolation: Decelerate,
					},
					alpha: {
						from: 1,
						to: 0,
						duration: 500,
						interpolation: Decelerate,
					}
				}
			}
		}
	};
#end  
}
