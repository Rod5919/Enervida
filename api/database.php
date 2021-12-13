<?php
class Database
{
    public $db;
    public function getConnection()
    {
        $this->db = null;
        try {
            $this->db = new mysqli('sql137.main-hosting.eu', 'u313469936_test', '@y;UQ0V3l', 'u313469936_enervida_test');
        } catch (Exception $e) {
            echo "Database could not be connected: " . $e->getMessage();
        }
        return $this->db;
    }
}
