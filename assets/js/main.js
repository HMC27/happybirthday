$('.start').click(function(){
    $('.stage1').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png','Let’s make a cake!','Vì hôm nay là sinh nhật của em,và anh không thể đến gặp em để chúc được nên anh nghĩ rằng tặng em một chiếc bánh sinh nhật em tự làm trên đây. Bắt đầu bằng việc trộn bột bánh, sau đó nướng trong lò nướng kỹ thuật số, và cuối cùng là trang trí. Chúc bé iuuu một sinh nhật thật vui vẻ và hạnh phúc.Tuổi mới làm đc nhiều việc lớn và pass  đại học mà mình muốn nhaaaa <3333');
})

progress = 1;

$('.modal_content button').click(function(){
    progress++;
    close_modal(progress)
})

function close_modal(callback){
    modal.css('transform','translateY(-50%) scale(0)')
    setTimeout(function(){
        $('.stage' + callback).fadeIn();
    },600)
}


function fire_modal(imgurl,title,content){

    modal = $('.birthday_inner__modal');
    modal.find('h1').html(title);
    modal.find('img').attr('src',imgurl);
    modal.find('p').html(content);
    setTimeout(function(){
        modal.css('transform','translateY(-50%) scale(1)')
    },1000)


}

l = ['red','blue','green',"white",'purple']
content = ["trộn tiếp điii","sắp xong rồi cố lên","một chút nữa thôi ngừi đẹp","nhuyễn lắm rồi mà vẫn chưa đủ","phát cuối này là xong òiii <333","xong òiiiiiii"]
mixing = false;
mixtimes = 0;

$('.mixer').click(function(){
    if(mixing == false){
        mixing = true
        $('.stage2_data').removeClass(l[mixtimes-1])
        $('.stage2_data').addClass(l[mixtimes])
        document.querySelector('.stage2_data').innerHTML = content[mixtimes]
        mixtimes++;
        $('.mix_spoon img').addClass('move')
        setTimeout(function(){
            $('.mix_spoon img').removeClass('move')
            mixing = false;
        },1000)
    }
    if(mixtimes == 6){
        $('.stage2').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png','Mix successful!','Waooo, hỗn hợp đã hoàn hảo! giờ là lúc cho vào lò nướng điện tử trong khoảng 3 giây. Khoảng thời gian này hãy tạo nên lớp đế xốp mịn và ngonn nhất.');

    }

})

$('.tin').draggable({
    revert:true
})
$( ".oven" ).droppable({
    drop: function( event, ui ) {
        $('.stage3').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png','Bake successfull!','Bánh chín rùi! giờ chúng ta hãy làm bước cuối thôi nào cùng nhau tạo nên một chiếc bánh hoàn chỉnh nhaaa.');
    }
})

bases = 0;
fillings = 0;

$('.sponges .item_inner').click(function(){
    $('.sponges').addClass('inactive')
    $('.fillings').removeClass('inactive')
    t = $(this).attr('class').split(' ').pop();
    bases++
    if(bases < 6){
        add_sponge(t)
    }
})

$('.fillings .item_inner').click(function(){

    $('.fillings').addClass('inactive')
    $('.sponges').removeClass('inactive')
    f = $(this).attr('class').split(' ').pop();
    fillings++
    if(fillings < 7){
        add_filling(f)
    }
})

function add_sponge(t){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
    $('.sponges h5 span').html(bases)
}

$('.startagain').click(function(){
    $('.cakemake').html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $('.sponges h5 span').html(bases)
    $('.fillings h5 span').html(fillings)
     $('.fillings').removeClass('inactive')
    $('.sponges').addClass('inactive')
})
function add_filling(f){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
    $('.fillings h5 span').html(fillings)
}

function fin(){
    $('h1,h2,.options,.startagain,.add').fadeOut();
    
    setTimeout(function(){
        $('.cakemake').fadeIn()
        $('.cakemake').animate({'margin-top':'0px'})
    },1000)
    add_candle()
    $('svg').addClass('text')
}

function add_candle(){
    var stages = $('.cakemake > div').length;
    var h = (stages/2) * 41 + 22 + 'px';
    console.log(stages)
    $('.cakemake').prepend('<div class="candle" ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>')
    $('svg').show()
    setTimeout(function(){
        $('.sa').fadeIn()
    },2200)
    
}

$('.add').click(function(){
    fin();
})

$('.sa').click(function(){
    window.location.reload();
})

// repair

document.querySelector('.audio').volume = 0.2
