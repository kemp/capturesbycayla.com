<template>
    <div ref="slideshow" class="quotes">
        <div class="quote"><p>"She's great!" &mdash; Steven Kemp</p></div>
        <div class="quote"><p>"She's really great!" &mdash; Steven Kemp</p></div>
        <div class="quote"><p>"She's super great!" &mdash; Steven Kemp</p></div>
        <div class="quote"><p>"She's not great!" &mdash; Steven Kemp</p></div>
    </div>
</template>

<script>
    import Viewer from 'viewerjs';

    export default {
        data() {
            return { slideshow: null };
        },

        mounted() {
            this.slideshow = this.$refs.slideshow;

            $(this.slideshow).slick({
                arrows: true,
                autoplay: true,
                dots: true,
            });
        }
    }
</script>