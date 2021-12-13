<?php
class Adoption
{
    // dbection
    private $db;
    // Table
    private $db_table = "adoptions";
    // Columns
    public $id;
    public $status;
    public $name;
    public $description;
    public $img;
    public $likes;


    // Db dbection
    public function __construct($db)
    {
        $this->db = $db;
    }

    // GET ALL
    public function getAdoptions()
    {
        $sqlQuery = "SELECT * FROM " . $this->db_table . "";
        $this->result = $this->db->query($sqlQuery);
        return $this->result;
    }

    // CREATE
    public function createAdoption()
    {
        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->img = htmlspecialchars(strip_tags($this->img));

        $sqlQuery = "INSERT INTO adoptions
        (status, name, description, img, likes)
        VALUES(1,
        '" . $this->name . "',
        '" . $this->description . "',
        '" . $this->img . "',
        0);";


        $this->db->query($sqlQuery);

        if ($this->db->affected_rows > 0) {
            return true;
        }
        return false;
    }

    // GET SINGLE POST
    public function getSinglePost()
    {
        $sqlQuery = "SELECT * FROM" . $this->db_table .
            "WHERE id = " . $this->id;

        $record = $this->db->query($sqlQuery);
        $dataRow = $record->fetch_array();

        $this->status = $dataRow['status'];
        $this->title = $dataRow['title'];
        $this->summary = $dataRow['summary'];
        $this->content = $dataRow['content'];
        $this->date = $dataRow['date'];
        $this->url = $dataRow['url'];
        $this->likes = $dataRow['likes'];
        $this->img = $dataRow['img'];
    }

    // UPDATE
    public function updateEmployee()
    {
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->designation = htmlspecialchars(strip_tags($this->designation));
        $this->created = htmlspecialchars(strip_tags($this->created));
        $this->id = htmlspecialchars(strip_tags($this->id));

        $sqlQuery = "UPDATE " . $this->db_table . " SET name = '" . $this->name . "',
email = '" . $this->email . "',
designation = '" . $this->designation . "',created = '" . $this->created . "'
WHERE id = " . $this->id;

        $this->db->query($sqlQuery);
        if ($this->db->affected_rows > 0) {
            return true;
        }
        return false;
    }

    // DELETE
    function deleteEmployee()
    {
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = " . $this->id;
        $this->db->query($sqlQuery);
        if ($this->db->affected_rows > 0) {
            return true;
        }
        return false;
    }
}
