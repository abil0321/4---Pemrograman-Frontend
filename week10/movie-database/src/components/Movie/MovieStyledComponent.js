import styled from "styled-components";

const StyledMovie = styled.div`
margin-bottom: 1rem;

.movie:hover .movie__title {
  border-radius: 25px;
  color: white;
}

.movie:hover .movie__date {
  border-radius: 25px;
  color: white;
}

.movie:hover {
  border: 2px solid blue;
  background-color: rgba(0, 0, 16, 0.36);
  border-radius: 25px;
  margin: 2rem;
  padding: 1rem;
}

img {
  border-radius: 25px;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

h3 {
  color: #4361ee;
  font-size: 1.95rem;
  margin-bottom: 0.5rem;
}

p {
  color: #64748b;
}

@media (min-width: 768px) {
  flex-basis: 50%;
}

@media (min-width: 992px) {
  flex-basis: 25%;
  padding: 1rem;

  .movie:hover {
    margin: 0 0 3rem 0;
    padding: 1rem;
  }
}
`;

export default StyledMovie;