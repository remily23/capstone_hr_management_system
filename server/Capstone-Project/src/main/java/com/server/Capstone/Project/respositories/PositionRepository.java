package com.server.Capstone.Project.respositories;


import com.server.Capstone.Project.models.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PositionRepository extends JpaRepository <Position, Long > {
}
