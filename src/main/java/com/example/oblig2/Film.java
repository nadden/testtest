package com.example.oblig2;

public class Film {
    private String filmValg;

    public Film(String filmValg){
        this.filmValg = filmValg;
    }
    public Film(){

    }

    public String getFilmValg(){
        return filmValg;
    }
    public void setFilmValg(String filmValg){
        this.filmValg = filmValg;
    }
}
