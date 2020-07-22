import React from "react";
import {ScrollItem} from "./ScrollItem";

export const ScrollExample = () => {
return ( <div className="scroll-wrap">
<ScrollItem><input type="text" placeHolder="enter the name"/></ScrollItem>
<ScrollItem>bar</ScrollItem>
<ScrollItem>eh</ScrollItem>
</div>)
}
