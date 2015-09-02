(: Return the state of application  :)

xquery version "3.0";


import module namespace config="http://e-smile.org/portal/config" at "../config.xqm";

(:import module namespace config="http://e-smile.org/es-desktop/config" at "../config.xqm";:)
import module namespace e = "http://e-smile.org/common/errors" at "/db/apps/esmile/common/modules/errors.xqm"; 
import module namespace state="http://e-smile.org/common/state" at "../../../common/modules/state.xqm";
import module namespace mapxt="http://e-smile.org/common/map-extensions" at "../../../common/modules/map-extensions.xqm";


declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
(:declare namespace err="http://www.w3.org/2005/xqt-errors/";:)

declare option output:method "json";
declare option output:media-type "application/json";

try {
    let $method := request:get-method()
    let $app := config:app-name() 
    let $state := state:get($app)

    (:let $log := util:log-system-out(("state ", exists($state)))  :)
    (:let $log := util:log-system-out(("requestData ",request:get-data()))  :)
    (:let $log := util:log-system-out(("session:  ",session:get-id()))  :)


    let $check-init := if(empty($state)) (:if state is empty, we need to initiate it:)
        then (state:init($app,( $config:expath-descriptor, config:app-state() ))) 
        else ($state)
    let $state := if($method = "POST") 
        then (state:set($app, mapxt:request-to-map())) 
        else ($check-init)
    return (
(:        util:log-system-out(("error ", $err:description))  ,:)
        mapxt:to-el($state)        
    )

} catch * {
     ( 
        response:set-status-code(401),
        <status>{$err:description}</status>
     )
}


