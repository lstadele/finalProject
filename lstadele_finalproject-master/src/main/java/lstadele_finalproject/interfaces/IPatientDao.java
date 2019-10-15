package lstadele_finalproject.interfaces;


import lstadele_finalproject.entities.Patient;

import java.util.List;
import java.util.Optional;

/**
 * this class is the interface DAO class for the Patient domain
 *
 * @author Laura Stadele
 * @version 1.0
 * @since 2019-10-11
 */

public interface IPatientDao {
    /**
     * this method is for getting all patients from the database
     * @return it returns a list of all patients in the database
     */
    List<Patient> getAllPatients ();

    /**
     * this method is for getting a patient by id from the database
     * @param patientId the parameter going in will be the patient id needed
     * @return it will return a patient with a specific id
     */
    Optional<Patient> getPatientById (Long patientId);

    /**
     * this method is for adding a new patient to the database
     * @param patient the parameter going in will be the new patient information
     * a new patient will be added upon completion
     */
    Patient addNewPatient(Patient patient);

    /**
     * this method will update a patient by id
     * @param patientId this parameter is needed to specify which patient to update
     * @param patient  this parameter will be the updated information you're putting in
     * @return it will return the updated patient in the database
     */
    Patient updatePatient (Long patientId, Patient patient);

    /**
     * this method will delete a patient from the database
     * @param patientId this parameter will specify which patient to delete based on id
     * whatever patient you specify will be deleted upon completion
     */
    void deletePatient (Long patientId);

}
