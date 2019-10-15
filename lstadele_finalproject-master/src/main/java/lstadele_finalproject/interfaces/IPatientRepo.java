package lstadele_finalproject.interfaces;

import lstadele_finalproject.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 * this class is the interface repository class for the Patient domain
 *
 * @author Laura Stadele
 * @version 1.0
 * @since 2019-10-11
 */

@Repository
public interface IPatientRepo extends JpaRepository<Patient, Long> {
}
