

type Variant = {
    [key:string]:{
        [key:string]:{
            [key:string]:number
        }
    }
}




export const variants:Variant = {
scale:{
    initial:{
        scale:0.5,
        opacity:0
    },
    animate:{
        scale:1,
        opacity:1
    }
},
  moveUp:{
initial:{
    y:20,
    opacity:0
},
animate:{
    y:0,
    opacity:1
}
  },
  moveDown:{
    initial:{
        y:-20,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1
    }
  },
  moveLeft:{
    initial:{
        x:860,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1
    }
  },
  moveRight:{
    initial:{
        x:-20,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1
    }
  },
  rise:{
    initial:{
        opacity:0
    },
    animate:{
        opacity:1
    }
  },
}

export const transitions = {
    scale:{duration:0.9},
    moveUp:{duration:0.9,delay:1},
    moveDown:{duration:0.9,delay:1},
    moveLeft:{duration:0.9},
    moveRight:{duration:0.9},
    rise:{duration:2}

}