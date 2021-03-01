<table>
  <thead>
    <tr>
      <th></th>
      <th>Anne</th>
      <th>Juli</th>
      <th>Nele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>20</td>
      <td>25</td>
      <td>30</td>
    </tr>
    <tr>
      <td>2</td>
      <td>20</td>
      <td>15</td>
      <td>10</td>
    </tr>
    <tr>
      <td>3</td>
      <td>10</td>
      <td>15</td>
      <td>20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>∑</td>
      <td>50</td>
      <td>55</td>
      <td>60</td>
    </tr>
    <tr class="places">
      <td></td>
      <td>3</td>
      <td>2</td>
      <td class="winner">1</td>
    </tr>
  </tfoot>
</table>

<style>
  table {
  border-spacing: 0;
  margin: 60px auto;
  max-width: 600px;
  width: 100%;
}

th,
td {
  background-color: #2e4560;
  padding: 20px 10px;
  text-align: center;
}
th {
  padding: 10px;
}
td {
  border-top: 1px solid var(--primary);
}
th:not(:last-child),
td:not(:last-child) {
  border-right: 1px solid var(--primary);
}
th:first-child {
  background-color: transparent;
}
tbody td {
  background-color: #496e97;
}
tbody tr:nth-child(2n) td {
  background-color: #42648a;
}
tbody td:not(:first-child),
tfoot td:not(:first-child) {
  font-family: Lato, Verdana, sans-serif;
}
tr.places td {
  background-color: transparent;
  font-size: 0.8rem;
  padding: 5px;
}
tr.places td.winner {
  font-size: 1rem;
}

</style>