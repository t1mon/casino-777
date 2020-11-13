<template>
<div>
        <div class="row col s12 main-wrap" v-lazy-container="{ selector: 'img' }"  v-lazy:background-image="imgObj" >
        <div class="container mt-5">
            <div class="row pt-5">
                <div class="col s12 center">
                    <h1 class="text-red title center-align">ПОЛУЧАЙ ПРИЗЫ!<br><span class="white-text">КРУТИ КОЛЕСО</span></h1>
                </div>
            </div>
            <div class="row mt-mobile">
                <div class="col s12 main" v-lazy:background-image="cardsObj">
                    <img ref='wheel' data-src="img/wheel/wheel-ru.png" data-loading="img/wheel/wheel-blur.png" alt="" id="wheel" class="center-block wheel">
                    <img data-src="img/wheel/btn-ru.png" data-loading="img/wheel/btn-blur.png" alt="" class="wheel-btn">
                    <div class="rotate-wheel-btn" @click="runWheel">
                        <div class="counter valign-wrapper">
                                <p class="counter__num">{{ allNum }}</p>
                            <div>
                                <p class="counter__discription">
                                    количество<br>
                                    попыток
                                </p>
                            </div>
                        </div>
                    </div>
                    <img data-src="img/money/left-top.png"  data-loading="img/money/left-top-blur.png" alt="" class="money money-left-top">
                    <img data-src="img/money/left-bottom.png" data-loading="img/money/left-bottom-blur.png" alt="" class="money money-left-bottom">
                    <img data-src="img/money/right-top.png" data-loading="img/money/right-top-blur.png" alt="" class="money money-right-top">
                    <img data-src="img/money/right-center.png" data-loading="img/money/right-center-blur.png" alt="" class="money money-right-center">
                    <img data-src="img/money/right-bottom.png" data-loading="img/money/right-bottom-blur.png" alt="" class="money money-right-bottom">
                    <img data-src="img/cubes/left.png" data-loading="img/cubes/left-blur.png" alt="" class="cub cub_left">
                    <img data-src="img/cubes/right.png" data-loading="img/cubes/right-blur.png" alt="" class="cub cub_right">
                </div>
            </div>
        </div>
        <img data-src="img/non-focus-money/left.png" alt="" class="money money_non-focus money_non-focus-left">
        <img data-src="img/non-focus-money/top.png" alt="" class="money money_non-focus money_non-focus-top">
        <img data-src="img/non-focus-money/right.png" alt="" class="money money_non-focus money_non-focus-right">
    </div>
            <!-- Modal Structure -->
        <div ref="modal_" class="modal">
            <div class="modal-content">
            <div v-if="(wheelId == 1 || wheelId == 2)">    
                <h4 class="title-modal">Регистрация</h4>
                <p class="text-modal">Каждому новому пользователю <br>
                    полагается свой бонус,<br>
                    Вам <span class="text-red">50 Бесплатных</span> спинов <br>
                    в игре WIXX
                </p>
            </div>
            <div v-if="(wheelId == 3)">    
                <h4 class="title-modal">Ваш бонус</h4>
                <p class="text-modal">
                    Вам <span class="text-red">60 Бесплатных</span> спинов <br>
                    в игре WIXX(мин депозит 20 евро)
                </p>
            </div>
            <div v-if="(wheelId == 4)">    
                <h4 class="title-modal">Ваш бонус</h4>
                <p class="text-modal">
                    Вам <span class="text-red">75 Бесплатных</span> спинов <br>
                    в игре WIXX(мин депозит 30 евро)
                </p>
            </div>
            <div v-if="(wheelId == 5)">    
                <h4 class="title-modal">Ваш бонус</h4>
                <p class="text-modal">
                    Вам <span class="text-red">100 Бесплатных</span> спинов <br>
                    в игре WIXX(мин депозит 40 евро)
                </p>
            </div>
            <div v-if="(wheelId == 6)">    
                <h4 class="title-modal">Ваш бонус</h4>
                <p class="text-modal">
                    Беспроигрышная <span class="text-red">ставка в 25 евро</span><br> ( мин депозит 25 евро)
                </p>
            </div>
                <img src="img/modal/money-left.png" alt="" class="img-modal modal-money-left">
                <img src="img/modal/chip-black.png" alt="" class="img-modal modal-chip-black">
                <img src="img/modal/chip-red.png" alt="" class="img-modal modal-chip-red">
                <img src="img/modal/money-right.png" alt="" class="img-modal modal-money-right">
            </div>
            <button v-if="(currentNum <3)" class="btn-modal" @click="modalClose">Крутить еще</button>
            <div class="modal-footer">
            <!-- <button class="btn-modal" @click.prevent="redirectUrl()">Получить бонус</button> -->
            <a class="btn-modal" :href="urlTo">Получить бонус</a>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    name: 'WheelRussia',
    data: ()=>({
        dataWheel: [
                    {id: 1, int: 10, angle: 0,   urlTo: 'https://uzfsf.rdtk.io/click/1'},  // БЕЗ ВЫИГРЫША
                    {id: 2, int: 25, angle: 60,  urlTo: 'https://uzfsf.rdtk.io/click/1'}, //Попробуй еще раз
                    {id: 3, int: 25, angle: 120, urlTo: 'https://uzfsf.rdtk.io/click/2'}, //60 Бесплатных спинов в игре WIXX(мин депозит 20 евро)
                    {id: 4, int: 15, angle: 180, urlTo: 'https://uzfsf.rdtk.io/click/3'}, //75 Бесплатных спинов в игре WIXX(мин депозит 30 евро)
                    {id: 5, int: 15, angle: 240, urlTo: 'https://uzfsf.rdtk.io/click/4'}, //100 Бесплатных спинов в игре WIXX(мин депозит 40 евро)
                    {id: 6, int: 10, angle: 300, urlTo: 'https://uzfsf.rdtk.io/click/5'} //Беспроигрышная ставка в 25 евро( мин депозит 25 евро)
                    ],
        currentDegWheel: 3600,
        wheelId:1,
        currentNum:0,
        allNum:3,
        modal:null,
        urlTo:'',
        blockWheel: false,
        imgObj: {
            src: '/img/bg/bg.jpg',
            //error: 'http://xx.com/error.png',
            loading: '/img/bg/bg-blur.jpg'
        },
        cardsObj: {
            src: '/img/cards/cards.png',
            //error: 'http://xx.com/error.png',
            loading: '/img/cards/cards-blur.png'
        },
    }),
    methods: {
        runWheel: function() {
            if (!this.blockWheel && this.currentNum < 3 ){
                this.blockWheel = true
                const a = [
                    {id: 1, int: 10, angle: 0,   urlTo: 'https://uzfsf.rdtk.io/click/1'},  // БЕЗ ВЫИГРЫША
                    {id: 2, int: 25, angle: 60,  urlTo: 'https://uzfsf.rdtk.io/click/1'}, //Попробуй еще раз
                    {id: 3, int: 25, angle: 120, urlTo: 'https://uzfsf.rdtk.io/click/2'}, //60 Бесплатных спинов в игре WIXX(мин депозит 20 евро)
                    {id: 4, int: 15, angle: 180, urlTo: 'https://uzfsf.rdtk.io/click/3'}, //75 Бесплатных спинов в игре WIXX(мин депозит 30 евро)
                    {id: 5, int: 15, angle: 240, urlTo: 'https://uzfsf.rdtk.io/click/4'}, //100 Бесплатных спинов в игре WIXX(мин депозит 40 евро)
                    {id: 6, int: 10, angle: 300, urlTo: 'https://uzfsf.rdtk.io/click/5'} //Беспроигрышная ставка в 25 евро( мин депозит 25 евро)
                ];
            
                const wheel = this.$refs.wheel
    
                    let sum = 0;
                    for (let i = 0; i < a.length; i++) {
                    sum += a[i].int;
                    }
                    
                    let rand = Math.floor(Math.random() * sum);
                    
                    let i = 0;
                    for (let s = a[0].int; s <= rand; s += a[i].int) {
                    i++;
                    }
                    //console.log(a[i].id + ' ' + a[i].angle)
                    wheel.style.transform = 'rotate('+((this.currentDegWheel)+a[i].angle)+'deg)' //шаг 60deg
                    this.currentDegWheel += 3600
                    this.wheelId = a[i].id
                    this.urlTo = a[i].urlTo
                    this.currentNum++
                    this.allNum--
                    this.$store.commit('changeCounter',this.currentNum)
                    this.$store.commit('changeId',a[i].id)
                    setTimeout(this.modalOpen,10000)
                    
            }    
        },
        redirectUrl: function(){
            window.location.href = this.urlTo
            //this.$router.push(this.urlTo)
            //console.log(this.urlTo)
        },
        modalOpen: function(){
            if (this.currentNum < 3 && (this.wheelId == 1 || this.wheelId == 2)){
                this.blockWheel = !this.blockWheel
            }else{
                //console.log(this.wheelId);
                this.modal.open()
            }
        },
        modalClose: function(){
            this.blockWheel = !this.blockWheel
            this.modal.close()
        }
    },
    mounted(){
        // eslint-disable-next-line no-undef
        M.Modal.init(this.$refs.modal_, {opacity: 0.8, dismissible:false});   
        // eslint-disable-next-line no-undef
        this.modal = M.Modal.getInstance(this.$refs.modal_)


        this.currentNum = this.$store.getters.computedCounter
        this.wheelId = this.$store.getters.computedId
        this.urlTo  = this.dataWheel[this.wheelId-1].urlTo
        this.$refs.wheel.style.transform = 'rotate('+(this.dataWheel[this.wheelId-1].angle)+'deg)' //шаг 60deg
        this.allNum -= this.currentNum
        if (this.currentNum > 0){
            this.modal.open()
            this.blockWheel = !this.blockWheel
        }
    },
}
</script>
