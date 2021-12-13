<?php
class Collab
{
    // dbection
    private $db;
    // Table
    private $db_table = "collab";
    // Columns
    public $id;
    public $status;
    public $first_name;
    public $last_name;
    public $position;
    public $photo;
    public $whats;
    public $fb;
    public $lk;


    // Db dbection
    public function __construct($db)
    {
        $this->db = $db;
    }

    // GET ALL
    public function getCollabs()
    {
        $sqlQuery = "SELECT * FROM " . $this->db_table . "";
        $this->result = $this->db->query($sqlQuery);
        return $this->result;
    }

    // CREATE
    public function createCollab()
    {
        // sanitize
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->position = htmlspecialchars(strip_tags($this->position));
        $this->photo = htmlspecialchars(strip_tags($this->photo));
        $this->whats = htmlspecialchars(strip_tags($this->whats));
        $this->fb = htmlspecialchars(strip_tags($this->fb));
        $this->lk = htmlspecialchars(strip_tags($this->lk));
        $this->yt = htmlspecialchars(strip_tags($this->yt));
        $this->ig = htmlspecialchars(strip_tags($this->ig));


        $sqlQuery = "INSERT INTO collab
        (status, first_name, last_name, position, photo, whats, fb, lk , yt, ig)
        VALUES(1,
        '" . $this->first_name . "',
        '" . $this->last_name . "',
        '" . $this->position . "',
        '" . $this->photo . "',
        '" . $this->whats . "',
        '" . $this->fb . "',
        '" . $this->lk . "',
        '" . $this->yt . "',
        '" . $this->ig . "');";


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
