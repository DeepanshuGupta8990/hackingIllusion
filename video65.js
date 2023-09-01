let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")
let p1 = ()=>{
    return new Promise((resolve,reject)=>{
        let s24 = setInterval(()=>{
            let div = document.createElement("div");
            div.innerHTML = "<span>Initializing hack program</span>"
                div1.append(div)
        },60);

        setTimeout(()=>{
            resolve(10)
         clearInterval(s24);
        },1000)
    })
}
let p55 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let kk = "Using hacking tools to ipsum dolor sit amet consectetur adipisicing elit. Quas molestias delectus magni mollitia repellat alias molestiae nam minima necessitatibus odit suscipit error aspernatur perspiciatis, provident natus, dolorum autem in cum ea nobis laboriosam numquam corporis. Dolores assumenda beatae est ipsa possimus facilis quod error quae omnis soluta! Illo ratione architecto repudiandae recusandae nam facilis suscipit eveniet iusto vel? Neque possimus eius beatae, quaerat rerum minima, repudiandae nesciunt asperiores perspiciatis vitae consequatur facere! Illum quibusdam magnam dolorum perferendis iure nesciunt voluptatem nostrum architecto ut obcaecati dicta nam quia inventore necessitatibus quidem corrupti ex eos beatae, enim error, animi, vitae numquam. Illo ullam perspiciatis vitae recusandae, totam illum quod fugit veritatis hic, obcaecati culpa incidunt cum maxime ab. Ducimus, at dolorem minima dignissimos sunt perspiciatis ipsa deserunt, iusto consequatur ex in cupiditate eius laudantium! Debitis quis asperiores eligendi nisi animi repudiandae atque eveniet ab, enim, recusandae sint voluptatibus laborum necessitatibus nam et eum corporis hic error quaerat voluptatem nobis dolores similique. Impedit corrupti nihil excepturi temporibus quibusdam nisi veniam officiis corporis mollitia. Minus dicta, at modi dolorem recusandae repellendus veniam, delectus impedit accusantium ratione eligendi similique unde non! Unde voluptas ipsum ratione, quis laboriosam, excepturi, consequuntur modi natus dolorem a recusandae itaque?";
            let bb = Array.from(kk);
            let div55 = document.getElementById("div55");
            // console.log(bb)
            let i = 0;
            // console.log(b[1])
            let ii = setInterval(function(){
            div55.append(bb[i]);
            i++;
            if(i==bb.length){
                clearInterval(ii)
             }
            },0.1)
            
         
            resolve(10)
        },2000)
    })
}
let p2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            div2.append("\nHacking gup.nishu username");
          
            resolve(10)
        },10000)
    })
}
let p3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            div3.append("\nConnecting to gup.nishu");
           
            resolve(10)
        },2000)
    })
}
let p4 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            div4.append("\nUsername:gup.nishu account has been hacked");
            
            resolve(10)
        },2000)
    })
}
const a = async()=>{
  let a1 = await p1();
  let a55 = await p55();
  let a2 = await p2();
  let a3 = await p3();
  let a4 = await p4();
}
a();