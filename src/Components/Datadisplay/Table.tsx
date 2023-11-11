import styled from "styled-components";

const TableStyled = styled.table`
  width: 50%;

`
const CapitionStyled = styled.caption`
  font-size: large;
  color: ${ ( { theme } ) => theme.colors.text };
  font-weight: 700;
  padding: 15px 0px;

`

const TheadStyled = styled.thead`

 
`

const TbodyStyled = styled.tbody`

 
`


const TdStyled = styled.td`

 
`
const TrStyled = styled.tr`

 
`
const ThStyled = styled.th`

 
`

function Table() {
  return (
   <TableStyled>

      <CapitionStyled>Statics</CapitionStyled>

      <TheadStyled>
        <TrStyled>
          <ThStyled>team</ThStyled>
          <ThStyled>seasons</ThStyled>
          <ThStyled>game</ThStyled>
          <ThStyled>goals</ThStyled>
          <ThStyled>assists</ThStyled>
          <ThStyled>title</ThStyled>
        </TrStyled>
      </TheadStyled>

      <TbodyStyled>

        <TrStyled>
          <TdStyled>brasil</TdStyled>
          <TdStyled>1</TdStyled>
          <TdStyled>2</TdStyled>
          <TdStyled>3</TdStyled>
          <TdStyled>4</TdStyled>
          <TdStyled>5</TdStyled>
        </TrStyled>

        <TrStyled>
          <TdStyled>brasil</TdStyled>
          <TdStyled>1</TdStyled>
          <TdStyled>2</TdStyled>
          <TdStyled>3</TdStyled>
          <TdStyled>4</TdStyled>
          <TdStyled>5</TdStyled>
        </TrStyled>

        <TrStyled>
          <TdStyled>santos</TdStyled>
          <TdStyled>1</TdStyled>
          <TdStyled>2</TdStyled>
          <TdStyled>3</TdStyled>
          <TdStyled>4</TdStyled>
          <TdStyled>5</TdStyled>
        </TrStyled>


        <TrStyled>
          <TdStyled>barcelona</TdStyled>
          <TdStyled>1</TdStyled>
          <TdStyled>2</TdStyled>
          <TdStyled>3</TdStyled>
          <TdStyled>4</TdStyled>
          <TdStyled>5</TdStyled>
        </TrStyled>

        <TrStyled>
          <TdStyled>al-hilal</TdStyled>
          <TdStyled>1</TdStyled>
          <TdStyled>2</TdStyled>
          <TdStyled>3</TdStyled>
          <TdStyled>4</TdStyled>
          <TdStyled>5</TdStyled>
        </TrStyled>

        


      </TbodyStyled>

   </TableStyled>
  );
}

export default Table;