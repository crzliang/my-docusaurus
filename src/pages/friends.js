import React from 'react';
import Layout from '@theme/Layout';
import members from '../data/friends.data';
import FriendsProfileCard from '../components/FriendsProfileCard';

function MemberList() {
  return (
    <div className="row text--center">
      {members.map(member => {
        return (
        <FriendsProfileCard
          key={member.name}
          className={'col col--3 margin-bottom--md'}
          name={member.name}
          avatar={member.avatar}
          children={member.description}
          blogUrl={member.blogUrl}
        />);
      })}
    </div>
  );
}

function MembersWall() {
    return (
      <Layout title="友链">
        <main>
          <div className="text--center margin-vert--lg">
            <h1>友链</h1>
            <p>有需要修改或添加友链的，邮箱联系: <a href="mailto:crzliang@qq.com" target="_blank" title="Email">crzliang@qq.com</a></p>
          </div>
          <div className="container">
            <MemberList />
          </div>
        </main>
      </Layout>
    );
  }
  
  export default MembersWall;