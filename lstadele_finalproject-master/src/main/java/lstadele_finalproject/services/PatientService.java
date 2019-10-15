package lstadele_finalproject.services;

import lstadele_finalproject.data.PatientDao;
import lstadele_finalproject.entities.Patient;
import lstadele_finalproject.interfaces.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * this class is the service class for the Patient domain
 *
 * @author Laura Stadele
 * @version 1.0
 * @since 2019-10-11
 */
@Service
public class PatientService implements IPatientService {

    @Autowired
    private PatientDao patientDao;

//    private ResponseEntity<List<Patient>> listResponseEntity;
//    private ResponseEntity<Patient> responseEntity;
//    private ResponseEntity<String> stringResponseEntity;

    /**
     * this method is for getting all patients from the database
     *
     * @return it returns a list of all patients in the database
     */
    @Override
    public List<Patient> getAllPatients() {
        return patientDao.getAllPatients();
    }

    /**
     * this method is for getting a patient by id from the database
     *
     * @param patientId the parameter going in will be the patient id needed
     * @return it will return a patient with a specific id
     */
    @Override
    public Optional<Patient> getPatientById(Long patientId) {
        return patientDao.getPatientById(patientId);
    }

    /**
     * this method is for adding a new patient to the database
     *
     * @param patient the parameter going in will be the new patient information
     *a new patient will be added upon completion
     */
    @Override
    public Patient addNewPatient(Patient patient) {
        return patientDao.addNewPatient(patient);
    }

    /**
     * this method will update a patient by id
     *
     * @param patientId this parameter is needed to specify which patient to update
     * @param patient   this parameter will be the updated information you're putting in
     * @return it will return the updated patient in the database
     */
    @Override
    public Patient updatePatient(Long patientId, Patient patient) {
        return patientDao.updatePatient(patientId, patient);
    }

    /**
     * this method will delete a patient from the database
     *
     * @param patientId this parameter will specify which patient to delete based on id
     *whatever patient you specify will be deleted upon completion
     */
    @Override
    public void deletePatient(Long patientId) {
        patientDao.deletePatient(patientId);
    }
}
