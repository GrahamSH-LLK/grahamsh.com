__NUXT_JSONP__("/blog/env", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){return {data:[{}],fetch:{"0":{post:{slug:O,description:"Creating an env setup script for wasteof.money.",layout:"post",author:"GrahamSH",title:"Creating an Env Setup Script",categories:"nodejs test",date:"2021-01-13T22:11:12.333Z",img:"\u002Flogo.svg",toc:[],body:{type:"root",children:[{type:b,tag:J,props:{},children:[{type:a,value:"The other day, I decided to make a setup script for wasteof.money. If you don't know what wasteof.money is, check it out at wasteof.money!\nTo start, I wanted to write to .env. The script I wrote for that simply wrote to .env using fs."}]},{type:a,value:q},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:c,props:{className:[R]},children:[{type:a,value:S}]},{type:b,tag:T,props:{className:[U,V]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\nfs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,L,g]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,L,g]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,x,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Got it!\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q}]}]}]},{type:a,value:q},{type:b,tag:J,props:{},children:[{type:a,value:"Then, I wanted to have the user be able to put in inputs. For that, I used the prompts package from NPM. My code now looked like this:"}]},{type:a,value:q},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:c,props:{className:[R]},children:[{type:a,value:S}]},{type:b,tag:T,props:{className:[U,V]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$,h]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,am]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n    `"},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ay}]},{type:a,value:"\n      \\nLISTEN_PORT"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q}]}]}]},{type:a,value:q},{type:b,tag:J,props:{},children:[{type:a,value:"At this point, the code was working, but it still didn't satisfy me. I wanted the user to be able to input a password and have that switched out with the "},{type:b,tag:K,props:{},children:[{type:a,value:"\u003Cpassword\u003E"}]},{type:a,value:" value from MongoDB Atlas."}]},{type:a,value:q},{type:b,tag:J,props:{},children:[{type:a,value:"I decided that it should also ask the user if they are using local, or Atlas. My final version looked like this."}]},{type:a,value:q},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:c,props:{className:[R]},children:[{type:a,value:S}]},{type:b,tag:T,props:{className:[U,V]},children:[{type:b,tag:K,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"dotenv\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:"config"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:" port "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:"LISTEN_PORT"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:" url "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:aw}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"localhost\u002Fsocial\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$,h]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,am]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:" url"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"select\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"value\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Pick a hosting type\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n      choices"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"MongoDB Atlas\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"MongoDB Atlas cloud hosting\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Local MongoDB\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"local\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"A local MongoDB instance\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,"function-variable",m]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"prev"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,$,h]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"prev "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"=="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aH}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"?"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aI}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s,aJ,"nil"]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"What is your MongoDB Password?\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:l}]},{type:a,value:" port"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ag]},children:[{type:b,tag:c,props:{className:[d,L,g]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,aK]},children:[{type:b,tag:c,props:{className:[d,N,e]},children:[{type:a,value:aL}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"\u003Cpassword\u003E\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" response"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"password"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"\u003Cdbname\u003E\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"social\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,N,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\\nLISTEN_PORT="}]},{type:b,tag:c,props:{className:[d,aK]},children:[{type:b,tag:c,props:{className:[d,N,e]},children:[{type:a,value:aL}]},{type:a,value:"\n      response"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:az}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,N,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,L,g]},children:[{type:a,value:E}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,w,m,r]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q}]}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fenv",extension:".md",createdAt:aN,updatedAt:aN}}},mutations:void 0}}("text","element","span","token","punctuation"," ","string","operator",",","(",")",":","function","\n    ",";",".","\n","property-access","keyword","}","{","=","method","console","const","\n  ","require","\n      name","\n      message","\n      ","`","class-name","log","\n      type","\n        ","p","code","template-punctuation","\"text\"","interpolation-punctuation","env","div","nuxt-content-highlight","filename","env.js","pre","language-js","line-numbers"," fs ","\"fs\"","writeFile","\".env\"","\"utf8\"","arrow","=\u003E","[","\n      initial","]","constant","response","template-string","DB_URL="," prompts ","\"prompts\"","async"," response ","control-flow","await","prompts","\"url\"","\"What is your MongoDB URL? (If you are using MongoDB Atlas, you can keep the \u003C\u003E values)\"","\"port\"","\"What port should the site run on?\"","number","8080","\n\n  fs","DB_URL","$","url","port","\"Your settings have been written to .env!\"","\"Run npm run serve to start the server or npm run dev to start it with nodemon.\""," process","||","\n          title","\n          description","\n          value","\"atlas\"","\"password\"","null","interpolation","${","replace","2022-01-06T12:43:53.923Z")));