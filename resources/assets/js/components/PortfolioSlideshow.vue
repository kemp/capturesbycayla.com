<template>
    <div>
        <ul class="categories">
            <li><button @click="goToSlide(0)" :class="{ 'active': (this.slide === 0) }">Individual</button></li>
            <li><button @click="goToSlide(1)" :class="{ 'active': (this.slide === 1) }">Senior</button></li>
            <li><button @click="goToSlide(2)" :class="{ 'active': (this.slide === 2) }">Engagement</button></li>
            <li><button @click="goToSlide(3)" :class="{ 'active': (this.slide === 3) }">Couples</button></li>
            <li><button @click="goToSlide(4)" :class="{ 'active': (this.slide === 4) }">Weddings</button></li>
        </ul>

        <div ref="slideshow" class="portfolio-slideshow">

            <div>
                <div class="gallery gallery-individual">
                    <img src="//lorempixel.com/150/150/people?nocache=a" alt="Gallery Individual">
                    <img src="//lorempixel.com/150/150/people?nocache=b" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/people?nocache=c" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/people?nocache=d" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/people?nocache=e" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/people?nocache=f" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/people?nocache=g" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/people?nocache=h" alt="Fill Murray">
                </div>
            </div>

            <div>
                <div class="gallery gallery-senior">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=a" alt="Gallery Senior">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=b" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=c" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=d" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=e" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=f" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=g" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/nightlife?nocache=h" alt="Fill Murray">
                </div>
            </div>

            <div>
                <div class="gallery gallery-engagement">
                    <img src="//lorempixel.com/150/150/fashion?nocache=a" alt="Gallery Engagement">
                    <img src="//lorempixel.com/150/150/fashion?nocache=b" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/fashion?nocache=c" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/fashion?nocache=d" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/fashion?nocache=e" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/fashion?nocache=f" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/fashion?nocache=g" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/fashion?nocache=h" alt="Fill Murray">
                </div>
            </div>

            <div>
                <div class="gallery gallery-couples">
                    <img src="//lorempixel.com/150/150/food?nocache=a" alt="Gallery Couples">
                    <img src="//lorempixel.com/150/150/food?nocache=b" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/food?nocache=c" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/food?nocache=d" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/food?nocache=e" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/food?nocache=f" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/food?nocache=g" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/food?nocache=h" alt="Fill Murray">
                </div>
            </div>

            <div>
                <div class="gallery gallery-weddings">
                    <img src="//lorempixel.com/150/150/business?nocache=a" alt="Gallery Weddings">
                    <img src="//lorempixel.com/150/150/business?nocache=b" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/business?nocache=c" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/business?nocache=d" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/business?nocache=e" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/business?nocache=f" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/business?nocache=g" alt="Fill Murray">
                    <img src="//lorempixel.com/150/150/business?nocache=h" alt="Fill Murray">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Viewer from 'viewerjs';

    export default {
        data() {
            return {
                slideshow: null,
                slide: 0,
            };
        },

        mounted() {
            this.slideshow = this.$refs.slideshow;

            $(this.slideshow).slick({
                arrows: false,
                fade: true,
            });

            $(this.slideshow).on('afterChange', (event, slick, nextSlide) => {
                this.slide = nextSlide;

                this.$forceUpdate();
            });

            for ( let gallery of this.$el.querySelectorAll('.gallery') ) {
                new Viewer(gallery , {
                    title: false,
                });
            }
        },

        methods: {
            goToSlide(slide) {
                $(this.slideshow).slick('slickGoTo', slide);
                this.slide = slide;
            },
        }
    }
</script>
