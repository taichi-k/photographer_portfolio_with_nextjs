(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{8071:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work/robotexJapanWorkshop",function(){return t(7184)}])},1208:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});var n=t(5893),r=t(5848),a=t.n(r),o=t(1664),s=t.n(o);function c(e){return(0,n.jsx)("div",{className:a().link,children:(0,n.jsx)(s(),{href:"/works",children:"◀︎ 戻る"})})}},9735:function(e,i,t){"use strict";t.d(i,{Z:function(){return h}});var n=t(5893),r=t(3143),a=t.n(r),o=t(9485),s=t.n(o);function c(e){return(0,n.jsx)("div",{className:s().image_box,children:(0,n.jsx)("img",{src:e.fileName,alt:"画像",className:s().image_box})})}var l=t(7294),_=t(8048),d=t.n(_);function u(e){return(0,n.jsx)("div",{className:d().fixed_wrapper,id:"fullScreenImage",onClick:()=>{document.querySelector("#fullScreenImage").remove()},children:(0,n.jsx)("div",{className:d().relative_wrapper,children:(0,n.jsx)("img",{src:e.fileName,alt:"画像",className:d().image})})})}var m=t(745);function h(e){let i=e=>{let i=document.querySelector(".my_container");(0,m.createRoot)(i).render((0,n.jsx)(u,{fileName:e.target.src}))},t=()=>{let e=document.createElement("div");e.classList=["my_container"],0==document.querySelectorAll(".my_container").length&&document.body.appendChild(e)},r=()=>{[...document.querySelectorAll(".my_container")].map(e=>{e.remove()})};return(0,l.useEffect)(()=>(t(),()=>{r()}),[]),(0,n.jsx)("div",{className:a().gallery,children:e.fileNames.map((e,t)=>(0,n.jsx)("button",{onClick:i,className:a().image_button,children:(0,n.jsx)(c,{fileName:e})},t))})}},2813:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});var n=t(5893),r=t(2631),a=t.n(r),o=t(1664),s=t.n(o);function c(e){return(0,n.jsxs)("div",{className:a().header,children:[(0,n.jsx)("div",{className:a().header__logo,children:(0,n.jsx)(s(),{href:"/",children:"Taichi Kosugi"})}),(0,n.jsx)("div",{className:a().menu,children:(0,n.jsx)("ul",{children:["Works","Me"].map((e,i)=>(0,n.jsx)("li",{className:a().header__menu_item,children:(0,n.jsx)(s(),{href:"/".concat(e.toLowerCase()),children:e})},i))})})]})}},7511:function(e,i,t){"use strict";t.d(i,{Z:function(){return o}});var n=t(5893),r=t(3031),a=t.n(r);function o(e){return(0,n.jsxs)("div",{className:a().thumbnail_in_work,children:[(0,n.jsx)("img",{src:e.image_path,alt:e.image_alt,className:a().thumbnail_in_work__image}),(0,n.jsxs)("p",{className:a().thumbnail_in_work__title,children:[e.title,e.year?"（".concat(e.year,"）"):""]})]})}},9007:function(e,i,t){"use strict";t.d(i,{Z:function(){return o}});var n=t(5893),r=t(3490),a=t.n(r);function o(e){return(0,n.jsx)("div",{className:a().header})}},9285:function(e,i,t){"use strict";t.d(i,{Z:function(){return l}});var n=t(5893),r=t(7007),a=t.n(r),o=t(6690),s=t.n(o),c=t(7294);function l(e){return e.description?(0,n.jsx)("div",{className:"".concat(a().description," ").concat(s().className),children:e.description.split(/(\n)/).map((e,i)=>(0,n.jsx)(c.Fragment,{children:e.match(/\n/)?(0,n.jsx)("br",{}):e},i))}):null}},7313:function(e,i,t){"use strict";t.d(i,{s4:function(){return n}});let n=(e,i)=>e.filter(e=>e.id==i)[0]},7184:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return h},default:function(){return p}});var n=t(5893),r=t(2003),a=t.n(r),o=t(2813),s=t(7511),c=t(9735),l=t(1208),_=t(9007),d=t(6193),u=t(7313),m=t(9285),h=!0;function p(e){let i=(0,u.s4)(d,"robotexJapanWorkshop"),t=e.filePaths;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(_.Z,{}),(0,n.jsxs)("main",{className:"".concat(a().main),children:[(0,n.jsx)(s.Z,{image_path:"/thumbnail/".concat(i.id,".jpg"),image_alt:i.title,title:i.title,year:i.year}),(0,n.jsx)(m.Z,{description:i.description}),(0,n.jsx)(c.Z,{fileNames:t}),(0,n.jsx)(l.Z,{})]})]})}},6690:function(e){e.exports={style:{fontFamily:"'__Shippori_Mincho_1e61fa', '__Shippori_Mincho_Fallback_1e61fa'",fontWeight:400,fontStyle:"normal"},className:"__className_1e61fa"}},5848:function(e){e.exports={link:"BackLinkInWork_link__T_7nF"}},8048:function(e){e.exports={fixed_wrapper:"FullScreenImage_fixed_wrapper__7C2HN",relative_wrapper:"FullScreenImage_relative_wrapper__pyzmV",image:"FullScreenImage_image__5E3dg"}},3143:function(e){e.exports={gallery:"Gallery_gallery__ICS4e",image_button:"Gallery_image_button__VvNei"}},9485:function(e){e.exports={image_box:"GalleryImage_image_box__9eni_"}},2631:function(e){e.exports={header:"Header_header__b6rsY",header__logo:"Header_header__logo__EozwX",header__menu_item:"Header_header__menu_item__SJ4rF"}},2003:function(e){e.exports={main:"Home_main__2uIek",center:"Home_center__Y_rV4"}},3031:function(e){e.exports={thumbnail_in_work:"ThumbnailInWork_thumbnail_in_work___dLlC",thumbnail_in_work__image:"ThumbnailInWork_thumbnail_in_work__image__BskKI",thumbnail_in_work__title:"ThumbnailInWork_thumbnail_in_work__title__yj1Ak"}},3490:function(e){e.exports={header:"WhiteBlockUnderHeader_header__9Z_jO"}},7007:function(e){e.exports={description:"WorkDescription_description__3ggTL"}},6193:function(e){"use strict";e.exports=JSON.parse('[{"title":"CO-CREATION Workshop - DENSO,VIVITA","id":"densoVivita","year":"2019","description":""},{"title":"Video Graphers Tokyo - Vook","id":"vgt","year":"2021","description":"株式会社Vookが主催するイベント「VideoGraphers Tokyo」（VGT, 2021）のスチールカメラマンを担当。3人チームでの撮影を行った。会場は、渋谷ストリーム。"},{"title":"SLUSH TOKYO","id":"slushTokyo2019","year":"2018 - 2019","description":"北欧最大級・フィンランド発のスタートアップイベントである「SLUSH TOKYO」にて、スチールを担当（2018年と2019年の会場：ビッグサイトでの様子を撮影）。SLUSHでは英語が公用語であり、100人を超える運営スタッフは、多国籍のボランティアで成り立っている。"},{"title":"Friends, Couples & Families","id":"groupPhotos","blackTitle":true,"year":"2018 - ","description":"友達フォト、カップルフォト、家族写真など、個人のお客様からのご依頼の記録。複数人グループを撮影する機会が多いです。編集のテイストは、依頼者のご希望に合わせます。撮影場所も依頼者の希望に合わせることができる他、おまかせで私からおすすめのスポットを提案することも可能です。"},{"title":"Team Photo - Robotex Japan","id":"robotexJapanTeamPhoto","year":"2019","description":"Robotex Japan様よりご依頼を受け、チーム写真を撮影。「創造性」をテーマとし、遊び心溢れるチーム写真を撮影した。写真の上部には、ロゴを配置するためのスペースを設けている。"},{"title":"WORKSHOP - Robotex Japan","id":"robotexJapanWorkshop","year":"2019","description":"Robotex Japanによって開催された、親子向けワークショップの様子を撮影。品川のMicrosoft社オフィスで実施された。"},{"title":"つくば美女図鑑","id":"tsukubaBijoZukan","year":"2019","description":"学生時代、母校である筑波大学の美女図鑑シリーズ（非公式）の写真を撮影。撮影した写真はTwitter上に投稿され、多くのユーザに閲覧された。"},{"title":"THE MEET UP - VARIETAS","id":"varietasWorkshop","year":"2023","description":"株式会社VARIETAS様より、イベントのアーカイブを残したいとご依頼を受け、撮影。Webや採用資料での利用を想定し、カットをデザインした。"},{"title":"初心展 - 華翠","id":"shioriShoshinten","year":"2021","description":"友人でもあり、日展書家でもある華翠（かすい）より、依頼をいただいて撮影。銀座の新井画廊にて、華翠初の個展である「初心展」の記録を収めた。"},{"title":"WORKSHOP - 千葉大学学園祭,FLT","id":"fltChibaUnivWorkshop","year":"2019","blackTitle":true,"description":"千葉大学学園祭にて、千葉大発の学生団体「FLT」が主催する、子ども向けのワークショップを撮影。オリジナルのトートバッグを作成する（絵を描く）というワークショップのテーマに合わせ、写真のテイストは柔らかでカラフルな雰囲気にした。"},{"title":"WORKSHOP - 千葉市美術館,FLT","id":"fltWorkshopChibaCityMuseum","year":"2019","blackTitle":true,"description":"千葉市美術館と、千葉大学の学生団体から社会人組織化した「FLT」のコラボレーションによる、子ども向けオンラインワークショップのアーカイブを撮影。当時はコロナの真っ只中であり、感染に配慮したワークショップイベントの形式が模索されていた。"},{"title":"LIVE Photos","id":"livePhotos","blackTitle":false,"description":""},{"title":"石岡市映像コンテスト","id":"ishioka","year":"2018","description":"2018年、茨城県石岡市が主催する映像コンテストに、同世代のクリエイターチームで参加。私は主にスチール撮影と構図のデザインを担当し、石岡市の農家、畜産農家に密着しながら、3ヶ月の時間をかけてドキュメンタリー作品を制作した。\\n\\n食をテーマとしたドキュメンタリー「食、つなぐ想い」（https://vook.vc/w/2523）は、「学生賞」を受賞、市より表彰された。"},{"title":"Dancer In The Light","id":"dancerInTheLight","year":"2018","description":""},{"title":"Daily Portraits","id":"dailyPortraits","description":""},{"title":"Nature Photos","id":"naturePhotos","description":""},{"title":"City Snaps","id":"citySnaps","description":""},{"title":"Wedding","id":"wedding","year":"2023 - ","description":""},{"title":"SELF PORTRAIT","id":"selfPortrait","description":""}]')}},function(e){e.O(0,[664,833,888,774,179],function(){return e(e.s=8071)}),_N_E=e.O()}]);