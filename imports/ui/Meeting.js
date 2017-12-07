import React from 'react';
import AddMember from './AddMember';
import MemberListFilter from './MemberListFilter';
import MemberList from './MemberList';

export default () => (
  <div>
    members: _id, name, hide, admin <br />
    dues: _id, new Date(), member, month, amount, checked <br />
    billings: _id, new Date(), month, due/deposited<br />
    sum,<br /><br />
    <MemberListFilter />
    <AddMember />
    <MemberList />
  </div>
);
