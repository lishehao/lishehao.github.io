// Pointer and brush coordinates are CSS pixels. The drawing buffer's DPR must
// never enter picking or change the physical size of the eraser.
export const ERASER_RADIUS=20;
export function normalizedPoint(event,rect){
 return {x:(event.clientX-rect.left)/rect.width,y:(event.clientY-rect.top)/rect.height};
}
export function skyCover(imageWidth,imageHeight,width,height){
 const sourceHeight=imageHeight*.69,scale=Math.max(width/imageWidth,height/sourceHeight);
 const drawWidth=imageWidth*scale,drawHeight=sourceHeight*scale;
 // Keep the upper-right planet in view while cropping the sky proportionally.
 return {sourceHeight,x:(width-drawWidth)*.93,y:0,width:drawWidth,height:drawHeight};
}
