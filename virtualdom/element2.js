export default function(type, props,...children) {
  return { type, props:props || {}, children };
}
