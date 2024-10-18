import { defineComponent as a, inject as s, onMounted as c, onBeforeUnmount as i } from "vue";
import { OpenStreetMapProvider as l, GeoSearchControl as p } from "leaflet-geosearch";
const u = ((e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t) o[n] = r;
  return o;
})(a({ name: "LeafletGeosearch", setup() {
  const e = s("leafletRef");
  if (!e) throw new Error("Leaflet map instance not found. Make sure this component is used inside a map component.");
  const t = new l(), o = p({ provider: t, style: "bar", showMarker: !0, retainZoomLevel: !1, autoClose: !0, searchLabel: "Enter address" });
  c(() => {
    e && e.addControl(o);
    const n = o.getContainer();
    n && (n.onclick = (r) => {
      r.stopPropagation();
    });
  }), i(() => {
    e.removeControl(o);
  });
} }), [["render", function(e, t, o, n, r, f) {
  return null;
}]]);
export {
  u as default
};
