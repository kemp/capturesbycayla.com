@extends('_layouts/app')

@section('main')
    <div class="home">
        @include('_includes/sections/introduction')

        @include('_includes/sections/portfolio')

        @include('_includes/sections/testimonials')

        @include('_includes/sections/contact')
    </div>
@endsection
