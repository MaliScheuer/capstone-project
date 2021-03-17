import { useState, useEffect } from 'react';
import { Route, Switch, match } from 'react-router-dom';
import Header from '../components/Header';
import MentorsCard from '../components/MentorsCard';


export default function SearchMentor({ open, mentors, onAddToFavourites }) {

  return (
    <>
      {
        mentors.map((mentor, index) => (
          <MentorsCard onAddToFavourites={onAddToFavourites} open={open} key={index} mentor={mentor} ></MentorsCard>))
      }

    </>
  )

}


