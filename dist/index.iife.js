var LeafletGeosearch=function(e,r){"use strict";return e.defineComponent({__name:"LeafletGeosearch",setup(c){const o=e.inject("leafletRef");if(!o)throw new Error("Leaflet map instance not found. Make sure this component is used inside map component.");const s=new r.OpenStreetMapProvider,n=r.GeoSearchControl({provider:s,style:"bar",showMarker:!0,retainZoomLevel:!1,autoClose:!0,searchLabel:"Enter address"});return e.onMounted(()=>{if(!o)return;o.addControl(n);let t=n.getContainer();t&&(t.onclick=a=>{a.stopPropagation()})}),e.onBeforeUnmount(()=>{o.removeControl(n)}),(t,a)=>(e.openBlock(),e.createElementBlock("div"))}})}(Vue,LeafletGeoSearch);
