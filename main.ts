class block{
    texture:Image
    xdec:number
    constructor (texture:string,xdec:number){
        this.texture = images.createImage(texture)
        this.xdec =  xdec
    }

    showit(){
        this.texture.showImage(this.xdec)
    }
}

let stone = new block(`
#####
#...#
#...#
#...#
#####
`,0)

