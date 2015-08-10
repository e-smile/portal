xquery version "3.0";

module namespace app="http://e-smile.org/portal/templates";

import module namespace templates="http://exist-db.org/xquery/templates" ;
import module namespace config="http://e-smile.org/portal/config" at "config.xqm";
import module namespace apputil="http://exist-db.org/xquery/apps";

(:~
 : 
 : @param $name encoded name of an e-smile application
 : @param $target string to add 
 :)


declare function app:getApplicationPath($node as node(), $model as map(*), $name as xs:string, $target as xs:string?) {
    let $name := xmldb:decode-uri($name),
        $path := apputil:resolve($name)
    
    return map {
        "path"  := concat(repo:get-root() , $path , $target)
    }  
};