import React from 'react';
import { Route, Switch } from 'react-router';
import Edit from './Edit/Edit';
import S from './Mainbar.styled';

function Mainbar() {
  return (
    <S.MainbarWrapper>
      <Switch>
        <Route path="/account/edit" exact component={Edit} />
        <Route path="/account/password/change" exact component={Edit} />
      </Switch>
    </S.MainbarWrapper>
  );
}

export default Mainbar;
