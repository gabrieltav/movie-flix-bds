package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository genreRepository;
	
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> list = genreRepository.findAll(Sort.by("id"));
		return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
	}
}
