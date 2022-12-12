# Weeb Roulette

- Woojae Kim
- Matt Sabo
- Connor Gillespie
- Leo Galvan
- Brooke Vonderheid

## Design

- [docs/wireframe]
- [docs/api_design]
- [docs/integrations]

## Intended Market

- Our audience are anime enthusiasts who want to organize their anime viewing experience by creating queues for themselves. It also provides a place for like minded individuals to discuss all things anime via Forums.

## Functionality

- Working and robust backend
- Signup feature
- Login feature
- Pull up AnimeList page via 3rd party API.
- Pulling up Detail page for each anime upon clicking image.

# Stretch Goals

- Viewing and editing profile pages.
- Viewing and using Forums.
- Interacting with animequeues attached to profile.

## Set up

1. Clone repo via https://gitlab.com/joki4127/weeb-roulette.git
2. CD into the new project directory
3. Run docker volume create mongo-data
4. Run docker compose build
5. Run docker compose up
6. Go to localhost:3000 to enjoy our website

## Tests

How to run test:

1. Go to weeb-roulette container
2. run python -m pytest
3. Check to see if all tests are passing

- [weeb_roulette/tests/test_threads] / Connor Gillespie
- [weeb_roulette/tests/test_queues] / Leo Galvan
- [weeb_roulette/tests/test_accounts] / Matt Sabo
- [weeb_roulette/tests/test_profiles] / John Kim
- [weeb-roulette/tests/test_post_account] / Brooke Vonderheid
