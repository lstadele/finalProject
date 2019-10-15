package lstadele_finalproject.entities;

import io.swagger.annotations.ApiModelProperty;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import static lstadele_finalproject.constants.StringConstants.INVALID_ZIP;
import static lstadele_finalproject.constants.StringConstants.REQUIRED_FIELD;

/**
 * this class is the entity class for the extended Address table
 * @author  Laura Stadele
 * @version 1.0
 * @since   2019-10-10
 */

@Embeddable
public class Address {

    /**
     * String that holds the Street Address information
     */
    @NotBlank(message = "Street" + REQUIRED_FIELD)
    @ApiModelProperty(value = "The name of the street being registered", example = "123 Oak St.")
    private String street;

    /**
     * String that holds the City information for the address
     */
    @NotBlank(message = "City" + REQUIRED_FIELD)
    @ApiModelProperty(value = "The name of the city being registered", example = "Denver")
    private String city;

    /**
     * String that holds the State information for the address
     */
    @NotBlank(message = "State" + REQUIRED_FIELD)
    @Pattern(regexp = "^(AL|AK|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE" +
            "|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$")
    @ApiModelProperty(value = "The name of the state being registered (two letter corresponding to a USA state)", example = "CO")
    private String state;

    /**
     * String that holds the Zip Code/Postal Code information for the address
     */
    @NotBlank(message = "Zip" + REQUIRED_FIELD)
    @Pattern(regexp = "^[0-9]{5}$", message = INVALID_ZIP)
    @ApiModelProperty(value = "Zip Code being registered (has to be in Zip Code Format)", example = "80215")
    private String zip;

    /**
     * Empty constructor for the Patient Address embeddable entity
     */
    public Address() {
    }

    /**
     * Constructor for the Patient Address embeddable entity
     */
    public Address(String street, String city, String state, String zip) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    /**
     * Getters and Setters for the Patient Address Entity
     */
    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }
}


