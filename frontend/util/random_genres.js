const genreList = [
    "Military action & adventure"
    ,"Action comedies"
    ,"Spy action & adventure"
    ,"Crime action & adventure"
    ,"Action sf & fantasy"
    ,"Action thrillers"
    ,"Asian action movies"
    ,"Adventures"
    ,"Comic book and superhero movies"
    ,"Martial arts movies"
    ,"Foreign action & adventure"
    ,"Westerns"
    ,"Hijacking movies"
    ,"Classic Action & Adventure"
    ,"Classic action & adventure"
    ,"Classic comedies"
    ,"Classic dramas"
    ,"Classic musical comedy"
    ,"Classic romantic movies"
    ,"Classic SF & fantasy"
    ,"Classic thrillers"
    ,"Classic war movies"
    ,"Classic TV shows"
    ,"Classic westerns"
    ,"Film Noir"
    ,"Epics"
    ,"Silent Movies"
    ,"Animes comedies"
    ,"Slapstick comedies"
    ,"Horror comedies"
    ,"Dark comedies"
    ,"Musicals comedies"
    ,"Political comedies"
    ,"Sports comedies"
    ,"Foreign Comedies"
    ,"Late Night Comedies"
    ,"Mockumentaries"
    ,"Screwball Comedies"
    ,"Stand-up Comedy"
    ,"Teen Comedies"
    ,"Satires"
    ,"Romantic Comedies"
    ,"Biographical dramas"
    ,"Dramas based on books"
    ,"Dramas based on real life"
    ,"LGBT Dramas"
    ,"Crime dramas"
    ,"Political Dramas"
    ,"Romantical dramas"
    ,"Social issues dramas"
    ,"Army dramas"
    ,"Sports dramas"
    ,"Showbiz dramas"
    ,"Deep sea horror movies"
    ,"Vampire horror movies"
    ,"Werewolf horror movies"
    ,"Zombie horror movies"
    ,"Satanic stories"
    ,"Teen screams"
    ,"Supernatural horror movies"
    ,"Slasher and serial killer movies"
    ,"Monster movies"
    ,"Horror comedy"
    ,"Foreign horror movies"
    ,"Cult horror movies"
    ,"Romantic Comedies"
    ,"Romantic favorites"
    ,"Romantic foreign movies"
    ,"Steamy romantic movies"
    ,"Quirky romance"
    ,"Romantic independent movies"
    ,"Romantic dramas"
    ,"Classic romantic movies"
    ,"Alien Sci - Fi"
    ,"Sci - Fi adventure"
    ,"Sci - Fi dramas"
    ,"Sci - Fi thrillers"
    ,"Action Sci - Fi & fantasy"
    ,"Classic Sci - Fi & fantasy"
    ,"Cult Sci - Fi & fantasy"
    ,"Fantasy movies"
    ,"Sci - Fi horror movies"
    ,"Foreign Sci - Fi & fantasy"
    ,"Martial arts movies"
    ,"Baseball movies"
    ,"Basketball movies"
    ,"Martial arts, boxing & wrestling"
    ,"Soccer movies"
    ,"Football movies"
    ,"Sports comedies"
    ,"Sports documentaries"
    ,"Sports dramas"
    ,"Boxing movies"
    ,"Sports & Fitness"
    ,"Spy thrillers"
    ,"Crime thrillers"
    ,"Political thrillers"
    ,"Psychological thrillers"
    ,"Sci-Fi thrillers"
    ,"Steamy thrillers"
    ,"Action thrillers"
    ,"Classic thrillers"
    ,"Foreign thrillers"
    ,"Independent thrillers"
    ,"Gangster movies"
    ,"Mysteries"
    ,"Supernatural thrillers"
    ,"Biographical documentaries"
    ,"Historical documentaries"
    ,"Music & concert documentaries"
    ,"Crime documentaries"
    ,"Political documentaries"
    ,"Science & navature documentaries"
    ,"Social & cultural documentaries"
    ,"Documentaires spirituels"
    ,"Military documentaries"
    ,"Sports documentaries"
    ,"Travel & adventure documentaries"
    ,"Foreign documentaries"
    ,"Religious documentaries"
    ,"Teen comedies"
    ,"Teen dramas"
    ,"Teen screams"
    ,"Disney"
    ,"Education for kids"
    ,"Movies for ages 0 to 2"
    ,"Movies for ages 2 to 4"
    ,"Movies for ages 5 to 7"
    ,"Movies for ages 8 to 10"
    ,"Movies for ages 11 to 12"
    ,"Movies based on children's books"
    ,"Family features"
    ,"TV cartoons"
    ,"Kids' TV"
    ,"Kids Music"
    ,"Animal tales"
    ,"Anime action"
    ,"Anime dramas"
    ,"Adult animation"
    ,"Animal tales"
    ,"Anime fantasy"
    ,"Anime features"
    ,"Anime horror"
    ,"Anime Sci-Fi"
    ,"Anime series"
    ,"Anime comedies"
    ,"Independent action & adventure"
    ,"Independent comedies"
    ,"Independent dramas"
    ,"Romantic independent movies"
    ,"Independent thrillers"
    ,"Experimental movies"
    ,"Foreign action & adventure"
    ,"Classic Foreign Movies"
    ,"Foreign comedies"
    ,"Foreign documentaries"
    ,"Foreign dramas"
    ,"Foreign gay & lesbian movies"
    ,"Foreign horror movies"
    ,"Foreign Sci-Fi & fantasy"
    ,"Foreign thrillers"
    ,"Romantic foreign movies"
    ,"Asian action movies"
    ,"German movies"
    ,"Latin american movies"
    ,"African Movies"
    ,"British movies"
    ,"Australian movies"
    ,"Belgian movies"
    ,"Chinese movies"
    ,"Korean movies"
    ,"Spanish movies"
    ,"French movies"
    ,"Greek movies"
    ,"Indian movies"
    ,"Irish movies"
    ,"Italian Movies"
    ,"Japanese movies"
    ,"Dutch movies"
    ,"New Zealand movies"
    ,"Russian movies"
    ,"Scandinavian movies"
    ,"Middle Eastern movies"
    ,"Southeast Asian Movies"
    ,"Eastern European movies"
    ,"Turkish movies"
    ,"World music concerts"
    ,"Rock & pop concerts"
    ,"Urban & dance concerts"
    ,"Kids music"
    ,"Country & western/folk"
    ,"Jazz & easy listening"
    ,"Latin music"
    ,"Musicals"
    ,"Classic musicals"
    ,"Disney musicals"
    ,"Showbiz musicals"
    ,"Stage musicals"
    ,"Art House Movies"
    ,"Epics"
    ,"Gangster movies"
    ,"Fantasy movies"
    ,"Film noir"
    ,"Experimental movies"
    ,"Faith & spirituality movies"
    ,"Satanic stories"
    ,"Satires"
    ,"Stand-up comedies"
    ,"Family-friendly christmas films"
    ,"Feel-good christmas children & family films"
    ,"Romantic christmas films"
    ,"Christmas children & family films"
    ,"Christmas children & family films for ages 5 to 7"
    ,"Christmas children & family films for ages 8 to 10"
    ,"Christmas children & family films for ages 11 to 12"
    ,"Goofy christmas children & family films"
    ,"Christmas children & family films from the 1990s"
    ,"British christmas children & family films"
    ,"European christmas children & family films"
    ,"Canadian christmas children & family films"
    ,"Christmas children & family films from the 1990s"
    ,"Action comedies"
    ,"Spy action & adventure"
    ,"Crime action & adventure"
    ,"Action sf & fantasy"
    ,"Action thrillers"
    ,"Asian action movies"
    ,"Adventures"
    ,"Comic book and superhero movies"
    ,"Martial arts movies"
    ,"Foreign action & adventure"
    ,"Westerns"
    ,"Hijacking movies"
    ,"Classic Action & Adventure"
    ,"Classic action & adventure"
    ,"Classic comedies"
    ,"Classic dramas"
    ,"Classic musical comedy"
    ,"Classic romantic movies"
    ,"Classic SF & fantasy"
    ,"Classic thrillers"
    ,"Classic war movies"
    ,"Classic TV shows"
    ,"Classic westerns"
    ,"Film Noir"
    ,"Epics"
    ,"Silent Movies"
    ,"Animes comedies"
    ,"Slapstick comedies"
    ,"Horror comedies"
    ,"Dark comedies"
    ,"Musicals comedies"
    ,"Political comedies"
    ,"Sports comedies"
    ,"Foreign Comedies"
    ,"Late Night Comedies"
    ,"Mockumentaries"
    ,"Screwball Comedies"
    ,"Stand-up Comedy"
    ,"Teen Comedies"
    ,"Satires"
    ,"Romantic Comedies"
    ,"Biographical dramas"
    ,"Dramas based on books"
    ,"Dramas based on real life"
    ,"LGBT Dramas"
    ,"Crime dramas"
    ,"Political Dramas"
    ,"Romantical dramas"
    ,"Social issues dramas"
    ,"Army dramas"
    ,"Sports dramas"
    ,"Showbiz dramas"
    ,"Deep sea horror movies"
    ,"Vampire horror movies"
    ,"Werewolf horror movies"
    ,"Zombie horror movies"
    ,"Satanic stories"
    ,"Teen screams"
    ,"Supernatural horror movies"
    ,"Slasher and serial killer movies"
    ,"Monster movies"
    ,"Horror comedy"
    ,"Foreign horror movies"
    ,"Cult horror movies"
    ,"Romantic Comedies"
    ,"Romantic favorites"
    ,"Romantic foreign movies"
    ,"Steamy romantic movies"
    ,"Quirky romance"
    ,"Romantic independent movies"
    ,"Romantic dramas"
    ,"Classic romantic movies"
    ,"Alien Sci - Fi"
    ,"Sci - Fi adventure"
    ,"Sci - Fi dramas"
    ,"Sci - Fi thrillers"
    ,"Action Sci - Fi & fantasy"
    ,"Classic Sci - Fi & fantasy"
    ,"Cult Sci - Fi & fantasy"
    ,"Fantasy movies"
    ,"Sci - Fi horror movies"
    ,"Foreign Sci - Fi & fantasy"
    ,"Martial arts movies"
    ,"Baseball movies"
    ,"Basketball movies"
    ,"Martial arts, boxing & wrestling"
    ,"Soccer movies"
    ,"Football movies"
    ,"Sports comedies"
    ,"Sports documentaries"
    ,"Sports dramas"
    ,"Boxing movies"
    ,"Sports & Fitness"
    ,"Spy thrillers"
    ,"Crime thrillers"
    ,"Political thrillers"
    ,"Psychological thrillers"
    ,"Sci-Fi thrillers"
    ,"Steamy thrillers"
    ,"Action thrillers"
    ,"Classic thrillers"
    ,"Foreign thrillers"
    ,"Independent thrillers"
    ,"Gangster movies"
    ,"Mysteries"
    ,"Supernatural thrillers"
    ,"Biographical documentaries"
    ,"Historical documentaries"
    ,"Music & concert documentaries"
    ,"Crime documentaries"
    ,"Political documentaries"
    ,"Science & nature documentaries"
    ,"Social & cultural documentaries"
    ,"Spiritual documentaries"
    ,"Military documentaries"
    ,"Sports documentaries"
    ,"Travel & adventure documentaries"
    ,"Foreign documentaries"
    ,"Religious documentaries"
    ,"Teen comedies"
    ,"Teen dramas"
    ,"Teen screams"
    ,"Disney"
    ,"Education for kids"
    ,"Movies for ages 0 to 2"
    ,"Movies for ages 2 to 4"
    ,"Movies for ages 5 to 7"
    ,"Movies for ages 8 to 10"
    ,"Movies for ages 11 to 12"
    ,"Movies based on children's books"
    ,"Family features"
    ,"TV cartoons"
    ,"Kids' TV"
    ,"Kids Music"
    ,"Animal tales"
    ,"Anime action"
    ,"Anime dramas"
    ,"Adult animation"
    ,"Animal tales"
    ,"Anime fantasy"
    ,"Anime features"
    ,"Anime horror"
    ,"Anime Sci-Fi"
    ,"Anime series"
    ,"Anime comedies"
    ,"Independent action & adventure"
    ,"Independent comedies"
    ,"Independent dramas"
    ,"Romantic independent movies"
    ,"Independent thrillers"
    ,"Experimental movies"
    ,"Foreign action & adventure"
    ,"Classic Foreign Movies"
    ,"Foreign comedies"
    ,"Foreign documentaries"
    ,"Foreign dramas"
    ,"Foreign gay & lesbian movies"
    ,"Foreign horror movies"
    ,"Foreign Sci-Fi & fantasy"
    ,"Foreign thrillers"
    ,"Romantic foreign movies"
    ,"Asian action movies"
    ,"German movies"
    ,"Latin american movies"
    ,"African Movies"
    ,"British movies"
    ,"Australian movies"
    ,"Belgian movies"
    ,"Chinese movies"
    ,"Korean movies"
    ,"Spanish movies"
    ,"French movies"
    ,"Greek movies"
    ,"Indian movies"
    ,"Irish movies"
    ,"Italian Movies"
    ,"Japanese movies"
    ,"Dutch movies"
    ,"New Zealand movies"
    ,"Russian movies"
    ,"Scandinavian movies"
    ,"Middle Eastern movies"
    ,"Southeast Asian Movies"
    ,"Eastern European movies"
    ,"Turkish movies"
    ,"World music concerts"
    ,"Rock & pop concerts"
    ,"Urban & dance concerts"
    ,"Kids music"
    ,"Country & western/folk"
    ,"Jazz & easy listening"
    ,"Latin music"
    ,"Musicals"
    ,"Classic musicals"
    ,"Disney musicals"
    ,"Showbiz musicals"
    ,"Stage musicals"
    ,"Art House Movies"
    ,"Epics"
    ,"Gangster movies"
    ,"Fantasy movies"
    ,"Film noir"
    ,"Experimental movies"
    ,"Faith & spirituality movies"
    ,"Satanic stories"
    ,"Satires"
    ,"Stand-up comedies"
    ,'Family-friendly christmas films'
    ,'Feel-good christmas children & family films'
    ,'Romantic christmas films'
    ,'Christmas children & family films'
    ,'Christmas children & family films for ages 5 to 7'
    ,'Christmas children & family films for ages 8 to 10'
    ,'Christmas children & family films for ages 11 to 12'
    ,'Goofy christmas children & family films'
    ,'Christmas children & family films from the 1990s'
    ,'British christmas children & family Ffilms'
    ,'European christmas children & family films'
    ,'Canadian christmas children & family films'
    ,'Christmas children & family films from the 1990s'
];

export const RANDOM_GENRES = [...new Set(genreList)];