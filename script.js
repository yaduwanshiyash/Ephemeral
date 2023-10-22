const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.textAnimate(".leap,#shery" , {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


Shery.makeMagnet("#shery", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate(".phel", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2",{
    y:10,
    duration:1,
    ease:Expo,
    stagger:.3,
    opacity:0
})

Shery.imageEffect(".img", {
    style: 3,
    config:{"uFrequencyX":{"value":3.31,"range":[0,100]},"uFrequencyY":{"value":6.61,"range":[0,100]},"uFrequencyZ":{"value":17.36,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9249877562130389},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
});

Shery.imageEffect(".img2", {
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.65,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7999674161288175},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });

gsap.from(".img",{
    y:"100",
    duration:2,
    ease:Expo
})

Shery.imageEffect("#photos", {
    style: 3,
    config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.6385874092193016},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.85,"range":[1,15]},"durationOut":{"value":0.5,"range":[0.1,5]},"durationIn":{"value":1.11,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.66,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2],"_gsap":{"id":69}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.31,"range":[0,2]},"noise_scale":{"value":13.22,"range":[0,100]}},
    gooey:true
  });


document.querySelector("#top button")
.addEventListener("mouseover",function(){
    gsap.to("#back video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
})

document.querySelector("#top button")
.addEventListener("mouseleave",function(){
    gsap.to("#back video",{
        opacity:0,
        duration:1.5,
        ease:Power4
    })
})