import { defineComponent as a, inject as s, onMounted as i, onBeforeUnmount as l, openBlock as c, createElementBlock as p } from "vue";
import { OpenStreetMapProvider as m, GeoSearchControl as d } from "leaflet-geosearch";
const C = a({ __name: "LeafletGeosearch", setup(f) {
  const e = s("leafletRef");
  if (!e) throw new Error("Leaflet map instance not found. Make sure this component is used inside map component.");
  const r = new m(), o = d({ provider: r, style: "bar", showMarker: !0, retainZoomLevel: !1, autoClose: !0, searchLabel: "Enter address" });
  return i(() => {
    if (!e) return;
    e.addControl(o);
    let t = o.getContainer();
    t && (t.onclick = (n) => {
      n.stopPropagation();
    });
  }), l(() => {
    e.removeControl(o);
  }), (t, n) => (c(), p("div"));
} });
export {
  C as default
};
