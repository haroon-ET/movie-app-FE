// pages/movies/edit/[id].tsx
"use client";
import MovieForm from "@/components/MovieForm";
import { movieService } from "@/service/movie.service";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const MovieEditPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const authToken: any = localStorage.getItem("token");
    const fetchMovie = async () => {
      const movie = await movieService.fetchMovieById(authToken, id!);
      setMovies(movie);
    };
    fetchMovie();
  }, [id]);
  return <MovieForm editMode initialValues={movies!} />;
};

export default MovieEditPage;
