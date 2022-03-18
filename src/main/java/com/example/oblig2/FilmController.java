package com.example.oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class FilmController {

    public final List<KundeFilm> kundeFilmReg = new ArrayList<>();
    public final List<Film> filmene = new ArrayList<>();

    public FilmController(){
        Film filmer1 = new Film("West Side Story");
        filmene.add(filmer1);
        Film filmer2 = new Film("Spiderman: No Way Home");
        filmene.add(filmer2);
        Film filmer3 = new Film("Verdens verste menneske");
        filmene.add(filmer3);
        Film filmer4 = new Film("Ghsot");
        filmene.add(filmer4);
        Film filmer5 = new Film("Hobbiten 2");
        filmene.add(filmer5);
    }
    @GetMapping("/hentFilmer")
    public List<Film> hentFilmer(){
        return filmene;
    }

    @PostMapping("/lagre")
    public void lagreFilm(KundeFilm filmene){
        kundeFilmReg.add(filmene);
    }

    @GetMapping("/hentAlle")
    public List<KundeFilm> hentAlle(){
        return kundeFilmReg;
    }

    @GetMapping("/slettData")
    public void slettData(){
        kundeFilmReg.clear();
    }
}