"use strict";

angular
    .module("flipkartCompleteTable", []).
directive("ngCompleteTable", NgCompleteTable);

function NgCompleteTable() {
    var DDO = {
        template: "<table><thead ng-transclude></thead></table>",
        rectrict: "EA",
        scope: {},
        transclude: true,
        compile: compile,
        link: {
            pre: preLink,
            post: postLink
        }

    };

    return DDO;

    function compile(tElement, tAttribute) {
        console.log("Reached Complie Function");
        console.log(tElement[0]);
        return DDO.link;

    }

    function preLink(scope, element, attribute) {
        console.log("Pre Link Function Reached");
        console.log(element[0]);
    }

    function postLink(scope, element, attribute) {
        console.log("Post Link Function Reached");
        console.log(element[0]);
    }

}
