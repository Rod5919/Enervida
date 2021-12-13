<?php
class Volunter
{
    // dbection
    private $db;
    // Table
    private $db_table = "volunters";
    // Columns
    public $id;
    public $status;
    public $name;
    public $position;
    public $img;
    public $fb;
    public $ig;
    public $lk;


    // Db dbection
    public function __construct($db)
    {
        $this->db = $db;
    }

    // GET ALL
    public function getVolunters()
    {
        $sqlQuery = "SELECT * FROM " . $this->db_table . "";
        $this->result = $this->db->query($sqlQuery);
        return $this->result;
    }

    // CREATE
    public function createVolunter()
    {
        // sanitize
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->position = htmlspecialchars(strip_tags($this->position));
        $this->img = htmlspecialchars(strip_tags($this->img));
        $this->fb = htmlspecialchars(strip_tags($this->fb));
        $this->ig = htmlspecialchars(strip_tags($this->ig));
        $this->lk = htmlspecialchars(strip_tags($this->lk));

        $sqlQuery = "INSERT INTO volunters
        (status, name, position, img, fb, ig, lk)
        VALUES(1,
        '" . $this->name . "',
        '" . $this->position . "',
        '" . $this->img . "',
        '" . $this->fb . "',
        '" . $this->ig . "',
        '" . $this->lk . "');";


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
