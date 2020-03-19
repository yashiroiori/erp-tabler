<?php

namespace App\Traits;

trait CreatedUpdatedAgoModelTrait
{
    public function getCreatedAgoAttribute() {
        if($this->created_at){
            return $this->created_at->diffForHumans();
        }
        return '';
    }
    
    public function getUpdatedAgoAttribute() {
        if($this->updated_at){
            return $this->updated_at->diffForHumans();
        }
        return '';
    }

    public function getDeletedAgoAttribute() {
        if($this->deleted_at){
            return $this->deleted_at->diffForHumans();
        }
        return '';
    }
}