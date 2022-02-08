import styles from './list.module.scss';
import { iPokemonPreview } from 'interfaces';
import { capitalizeFirst } from 'modules';
import Link from 'next/link';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface iListComponent {
  pokemons?: iPokemonPreview[];
}

export const ListComponent: React.FC<iListComponent> = React.memo(
  ({ pokemons }) => {
    return (
      <div className={styles.wrapper}>
        {pokemons?.map((pokemon) => (
          <Unit pokemon={pokemon} key={pokemon._id} />
        ))}
      </div>
    );
  }
);

const Unit: React.FC<{ pokemon: iPokemonPreview }> = ({ pokemon }) => {
  return (
    <Link href={`/${pokemon.name}`} key={pokemon._id}>
      <div className={styles.unitWrapper}>
        <div>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <span>{capitalizeFirst(pokemon.name)}</span>
        </div>
        <a>
          <FontAwesomeIcon icon={faArrowCircleRight} size="sm" />
        </a>
      </div>
    </Link>
  );
};
