package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private UserService userService;
	
	@Transactional
    public ReviewDTO insert(ReviewDTO dto) {
        Review entity = new Review();
        User userEntity = new User();

        entity.setText(dto.getText());
        entity.setMovie(new Movie(dto.getMovieId(), null, null, null, null, null, null));
        userEntity.setId(userService.findProfileUserLogged().getId());
        userEntity.setName(userService.findProfileUserLogged().getName());
        userEntity.setEmail(userService.findProfileUserLogged().getEmail());
        entity.setUser(userEntity);
        entity = reviewRepository.save(entity);

        return new ReviewDTO(entity, entity.getUser());
    }
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findReviewsOfMovie(Long id) throws ResourceNotFoundException {
		List<Review> list = reviewRepository.findReviewsOfMovie(id);
		if (list.isEmpty()) {
			throw new ResourceNotFoundException("Entity not found");
		}
		  return list.stream().map(x -> new ReviewDTO(x, x.getUser())).collect(Collectors.toList());
	}	
}
