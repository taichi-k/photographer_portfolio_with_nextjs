(()=>{var e={};e.id=304,e.ids=[304,888,660],e.modules={5922:e=>{e.exports={style:{fontFamily:"'__Shippori_Mincho_1e61fa', '__Shippori_Mincho_Fallback_1e61fa'",fontWeight:400,fontStyle:"normal"},className:"__className_1e61fa"}},2577:e=>{e.exports={link:"BackLinkInWork_link__T_7nF"}},157:e=>{e.exports={fixed_wrapper:"FullScreenImage_fixed_wrapper__7C2HN",relative_wrapper:"FullScreenImage_relative_wrapper__pyzmV",image:"FullScreenImage_image__5E3dg"}},5300:e=>{e.exports={gallery:"Gallery_gallery__ICS4e",image_button:"Gallery_image_button__VvNei"}},6168:e=>{e.exports={image_box:"GalleryImage_image_box__9eni_"}},7402:e=>{e.exports={header:"Header_header__b6rsY",header__logo:"Header_header__logo__EozwX",header__menu_item:"Header_header__menu_item__SJ4rF"}},1652:e=>{e.exports={main:"Home_main__2uIek",center:"Home_center__Y_rV4"}},3333:e=>{e.exports={thumbnail_in_work:"ThumbnailInWork_thumbnail_in_work___dLlC",thumbnail_in_work__image:"ThumbnailInWork_thumbnail_in_work__image__BskKI",thumbnail_in_work__title:"ThumbnailInWork_thumbnail_in_work__title__yj1Ak"}},973:e=>{e.exports={header:"WhiteBlockUnderHeader_header__9Z_jO"}},6448:e=>{e.exports={description:"WorkDescription_description__3ggTL"}},8917:(e,t,i)=>{"use strict";i.r(t),i.d(t,{config:()=>w,default:()=>y,getServerSideProps:()=>N,getStaticPaths:()=>T,getStaticProps:()=>P,reportWebVitals:()=>I,routeModule:()=>C,unstable_getServerProps:()=>V,unstable_getServerSideProps:()=>L,unstable_getStaticParams:()=>O,unstable_getStaticPaths:()=>F,unstable_getStaticProps:()=>W});var r={};i.r(r),i.d(r,{default:()=>j,getStaticProps:()=>v});var a=i(7093),s=i(5244),n=i(1323),o=i(2899),l=i.n(o),c=i(4982),d=i(997),_=i(1652),u=i.n(_),p=i(2813),m=i(7511),h=i(9072),x=i(1208),g=i(9007),b=i(6193),k=i(7313),S=i(9285);let f="naturePhotos";function j(e){let t=(0,k.s4)(b,f),i=e.filePaths;return(0,d.jsxs)(d.Fragment,{children:[d.jsx(p.Z,{}),d.jsx(g.Z,{}),(0,d.jsxs)("main",{className:`${u().main}`,children:[d.jsx(m.Z,{image_path:`/thumbnail/${t.id}.jpg`,image_alt:t.title,title:t.title,year:t.year}),d.jsx(S.Z,{description:t.description}),d.jsx(h.Z,{fileNames:i}),d.jsx(x.Z,{})]})]})}let v=async()=>({props:{filePaths:i(4230).sync(`./public/img/${f}/*`).map(k.Uu)}}),y=(0,n.l)(r,"default"),P=(0,n.l)(r,"getStaticProps"),T=(0,n.l)(r,"getStaticPaths"),N=(0,n.l)(r,"getServerSideProps"),w=(0,n.l)(r,"config"),I=(0,n.l)(r,"reportWebVitals"),W=(0,n.l)(r,"unstable_getStaticProps"),F=(0,n.l)(r,"unstable_getStaticPaths"),O=(0,n.l)(r,"unstable_getStaticParams"),V=(0,n.l)(r,"unstable_getServerProps"),L=(0,n.l)(r,"unstable_getServerSideProps"),C=new a.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/work/naturePhotos",pathname:"/work/naturePhotos",bundlePath:"",filename:""},components:{App:c.default,Document:l()},userland:r})},1208:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(997),a=i(2577),s=i.n(a),n=i(1664),o=i.n(n);function l(e){return r.jsx("div",{className:s().link,children:r.jsx(o(),{href:"/works",children:"◀︎ 戻る"})})}},9072:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var r=i(997),a=i(5300),s=i.n(a),n=i(6168),o=i.n(n);function l(e){return r.jsx("div",{className:o().image_box,children:r.jsx("img",{src:e.fileName,alt:"画像",className:o().image_box})})}i(6689);var c=i(157),d=i.n(c);function _(e){return r.jsx("div",{className:d().fixed_wrapper,id:"fullScreenImage",onClick:()=>{document.querySelector("#fullScreenImage").remove()},children:r.jsx("div",{className:d().relative_wrapper,children:r.jsx("img",{src:e.fileName,alt:"画像",className:d().image})})})}let u=require("react-dom/client");function p(e){let t=e=>{let t=document.querySelector(".my_container");(0,u.createRoot)(t).render(r.jsx(_,{fileName:e.target.src}))};return r.jsx("div",{className:s().gallery,children:e.fileNames.map((e,i)=>r.jsx("button",{onClick:t,className:s().image_button,children:r.jsx(l,{fileName:e})},i))})}},2813:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(997),a=i(7402),s=i.n(a),n=i(1664),o=i.n(n);function l(e){return(0,r.jsxs)("div",{className:s().header,children:[r.jsx("div",{className:s().header__logo,children:r.jsx(o(),{href:"/",children:"Taichi Kosugi"})}),r.jsx("div",{className:s().menu,children:r.jsx("ul",{children:["Works","Me"].map((e,t)=>r.jsx("li",{className:s().header__menu_item,children:r.jsx(o(),{href:`/${e.toLowerCase()}`,children:e})},t))})})]})}},7511:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(997),a=i(3333),s=i.n(a);function n(e){return(0,r.jsxs)("div",{className:s().thumbnail_in_work,children:[r.jsx("img",{src:e.image_path,alt:e.image_alt,className:s().thumbnail_in_work__image}),(0,r.jsxs)("p",{className:s().thumbnail_in_work__title,children:[e.title,e.year?`（${e.year}）`:""]})]})}},9007:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(997),a=i(973),s=i.n(a);function n(e){return r.jsx("div",{className:s().header})}},9285:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(997),a=i(6448),s=i.n(a),n=i(5922),o=i.n(n),l=i(6689),c=i.n(l);function d(e){return e.description?r.jsx("div",{className:`${s().description} ${o().className}`,children:e.description.split(/(\n)/).map((e,t)=>r.jsx(c().Fragment,{children:e.match(/\n/)?r.jsx("br",{}):e},t))}):null}},7313:(e,t,i)=>{"use strict";i.d(t,{Uu:()=>r,s4:()=>a});let r=e=>e.replace("public",""),a=(e,t)=>e.filter(e=>e.id==t)[0]},4982:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var r=i(997);let a=require("next/head");var s=i.n(a);function n({Component:e,pageProps:t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[r.jsx("title",{children:"Taichi Kosugi Portfolio"}),r.jsx("meta",{name:"description",content:"フォトグラファー - 小杉太一"}),r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),r.jsx(e,{...t,count:!0})]})}i(108)},108:()=>{},4230:e=>{"use strict";e.exports=require("glob")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")},6193:e=>{"use strict";e.exports=JSON.parse('[{"title":"CO-CREATION Workshop - DENSO,VIVITA","id":"densoVivita","year":"2019","description":""},{"title":"Video Graphers Tokyo - Vook","id":"vgt","year":"2021","description":"株式会社Vookが主催するイベント「VideoGraphers Tokyo」（VGT, 2021）のスチールカメラマンを担当。3人チームでの撮影を行った。会場は、渋谷ストリーム。"},{"title":"SLUSH TOKYO","id":"slushTokyo2019","year":"2018 - 2019","description":"北欧最大級・フィンランド発のスタートアップイベントである「SLUSH TOKYO」にて、スチールを担当（2018年と2019年の会場：ビッグサイトでの様子を撮影）。SLUSHでは英語が公用語であり、100人を超える運営スタッフは、多国籍のボランティアで成り立っている。"},{"title":"Friends, Couples & Families","id":"groupPhotos","blackTitle":true,"year":"2018 - ","description":"友達フォト、カップルフォト、家族写真など、個人のお客様からのご依頼の記録。複数人グループを撮影する機会が多いです。編集のテイストは、依頼者のご希望に合わせます。撮影場所も依頼者の希望に合わせることができる他、おまかせで私からおすすめのスポットを提案することも可能です。"},{"title":"Team Photo - Robotex Japan","id":"robotexJapanTeamPhoto","year":"2019","description":"Robotex Japan様よりご依頼を受け、チーム写真を撮影。「創造性」をテーマとし、遊び心溢れるチーム写真を撮影した。写真の上部には、ロゴを配置するためのスペースを設けている。"},{"title":"WORKSHOP - Robotex Japan","id":"robotexJapanWorkshop","year":"2019","description":"Robotex Japanによって開催された、親子向けワークショップの様子を撮影。品川のMicrosoft社オフィスで実施された。"},{"title":"つくば美女図鑑","id":"tsukubaBijoZukan","year":"2019","description":"学生時代、母校である筑波大学の美女図鑑シリーズ（非公式）の写真を撮影。撮影した写真はTwitter上に投稿され、多くのユーザに閲覧された。"},{"title":"THE MEET UP - VARIETAS","id":"varietasWorkshop","year":"2023","description":"株式会社VARIETAS様より、イベントのアーカイブを残したいとご依頼を受け、撮影。Webや採用資料での利用を想定し、カットをデザインした。"},{"title":"初心展 - 華翠","id":"shioriShoshinten","year":"2021","description":"友人でもあり、日展書家でもある華翠（かすい）より、依頼をいただいて撮影。銀座の新井画廊にて、華翠初の個展である「初心展」の記録を収めた。"},{"title":"WORKSHOP - 千葉大学学園祭,FLT","id":"fltChibaUnivWorkshop","year":"2019","blackTitle":true,"description":"千葉大学学園祭にて、千葉大発の学生団体「FLT」が主催する、子ども向けのワークショップを撮影。オリジナルのトートバッグを作成する（絵を描く）というワークショップのテーマに合わせ、写真のテイストは柔らかでカラフルな雰囲気にした。"},{"title":"WORKSHOP - 千葉市美術館,FLT","id":"fltWorkshopChibaCityMuseum","year":"2019","blackTitle":true,"description":"千葉市美術館と、千葉大学の学生団体から社会人組織化した「FLT」のコラボレーションによる、子ども向けオンラインワークショップのアーカイブを撮影。当時はコロナの真っ只中であり、感染に配慮したワークショップイベントの形式が模索されていた。"},{"title":"LIVE Photos","id":"livePhotos","blackTitle":false,"description":""},{"title":"石岡市映像コンテスト","id":"ishioka","year":"2018","description":"2018年、茨城県石岡市が主催する映像コンテストに、同世代のクリエイターチームで参加。私は主にスチール撮影と構図のデザインを担当し、石岡市の農家、畜産農家に密着しながら、3ヶ月の時間をかけてドキュメンタリー作品を制作した。\\n\\n食をテーマとしたドキュメンタリー「食、つなぐ想い」（https://vook.vc/w/2523）は、「学生賞」を受賞、市より表彰された。"},{"title":"Dancer In The Light","id":"dancerInTheLight","year":"2018","description":""},{"title":"Daily Portraits","id":"dailyPortraits","description":""},{"title":"Nature Photos","id":"naturePhotos","description":""},{"title":"City Snaps","id":"citySnaps","description":""},{"title":"Wedding","id":"wedding","year":"2023 - ","description":""},{"title":"SELF PORTRAIT","id":"selfPortrait","description":""}]')}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[899,559],()=>i(8917));module.exports=r})();