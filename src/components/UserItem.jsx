import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const UserItemStyled = styled.div`
  border-bottom: 2px solid ${theme.colors.primaryDark};
  display: grid;
  padding: 10px 20px;
  text-align: left;

  .data__user {
    width: 100%;
    overflow-x: scroll;
  }

  .data__user::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 3px;
    height: 3px;
  }

  .data__user::-webkit-scrollbar-thumb {
    background: ${theme.colors.secundaryDark};
  }

  .data__user span{
    font-size: 14px;
    color: ${theme.colors.secundaryDark};
  }
`

const UserItem = ({ diplayName, email, role, status, gridClass }) => {
  return (
    <UserItemStyled className={gridClass}>
      <div className="data__user">
        <p className="displayName">{diplayName}</p>
        <span>{email}</span>
      </div>
      <p>{role}</p>
      <p>{status}</p>
      <div>
        <span>I</span>
        <span>O</span>
      </div>
    </UserItemStyled>
  )
}

export default UserItem
