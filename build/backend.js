(()=>{"use strict";const e=window.wp.element,{__}=wp.i18n,{registerBlockType:t}=wp.blocks;t("cumulus-gutenberg/block-crsg-stationfinder",{title:__("CRSG Station Finder"),description:__("Gutenberg block for including data from the Cumulus Media Station Finder."),keywords:[__("crsg-stationfinder"),__("station finder"),__("stations")],supports:{align:["wide","full"],anchor:!0,html:!1},category:"widgets",icon:{src:"format-audio",foreground:"#3399cc"},edit:t=>{let{className:i}=t;return i+=" crsg-stationfinder",(0,e.createElement)("div",{className:i},"Station Finder")},save:t=>{let{className:i}=t;return i+=" crsg-stationfinder",(0,e.createElement)("div",{className:i})}})})();