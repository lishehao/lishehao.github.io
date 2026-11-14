const KEY='pocket-reload';
export function claimReload(getStorage=()=>globalThis.sessionStorage){
 try{
  const storage=getStorage();
  if(storage.getItem(KEY)==='1')return false;
  storage.setItem(KEY,'1');
  return storage.getItem(KEY)==='1';
 }catch{return false;}
}
export function clearReload(getStorage=()=>globalThis.sessionStorage){
 try{getStorage().removeItem(KEY);}catch{}
}
