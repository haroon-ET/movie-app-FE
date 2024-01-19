// pages/movies/edit/[id].tsx
"use client";
import { GetServerSideProps } from "next";
import MovieForm from "@/components/MovieForm";
import { movieService } from "@/service/movie.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const MovieEditPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id")
  const authToken: any = localStorage.getItem("token");
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await movieService.fetchMovieById(authToken, id!);
      setMovies(movie);
    };
    fetchMovie();
  }, [authToken, id]);
  return <MovieForm editMode initialValues={movies!} />;
};

export default MovieEditPage;