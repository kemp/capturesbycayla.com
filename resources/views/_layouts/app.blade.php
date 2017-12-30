<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Captures By Cayla</title>
		<meta name="description" content="Description!">

		<link rel="stylesheet" href="/css/minima.css">
	</head>
	<body>
		@include('_includes/header')

		<main class="page-content" aria-label="Content">
			<div class="wrapper">
				@yield('main')
			</div>
		</main>

		@include('_includes/footer')

		<script src="/js/app.js"></script>
	</body>
</html>
