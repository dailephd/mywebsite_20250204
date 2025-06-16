"use client";

export default function Page() {
    return (
        <div className="container mx-auto py-2 px-6 animate-fadeIn">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Publications</h3>
            <div className="text-xl">
                <ul className="space-y-4 text-gray-800">
                    <li>
                        <strong className="text-red-600">Le D.</strong>, Akiyama T., Weiss D., Kim M. (2023).
                        Dissociation kinetics of small-molecule inhibitors in Escherichia coli is coupled to physiological
                        state of cells. <em className="text-gray-700">Commun Biol</em>, 6, 223.
                        <a href="https://doi.org/10.1038/s42003-023-04604-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            https://doi.org/10.1038/s42003-023-04604-9
                        </a>
                    </li>
                    <li>
                        <strong className="text-red-600">Le D.</strong>, Lim S., Min KW., Park JW., Kim Y., Ha T., Moon KH., Wagner KU., Kim JW. (2021).
                        Tsg101 Is Necessary for the Establishment and Maintenance of Mouse Retinal Pigment Epithelial Cell Polarity.
                        <em className="text-gray-700">Mol Cells</em>, 44(3):168-178.
                        <a href="https://doi.org/10.14348/molcells.2021.0027" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            https://doi.org/10.14348/molcells.2021.0027
                        </a>. PMID: 33795534.
                    </li>
                    <li>
                        <strong className="text-red-600">Le D.</strong>, Krasnopeeva E., Sinjab F., Pilizota T., Kim M. (2021).
                        Active efflux leads to heterogeneous dissipation of proton motive force by protonophores in bacteria.
                        <em className="text-gray-700">mBio</em>, 0(0): e00676-00621.
                        <a href="https://doi.org/10.1128/mBio.00676-21" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            https://doi.org/10.1128/mBio.00676-21
                        </a>. PMID: 34253054.
                    </li>
                    <li>
                        Iyer S., <strong className="text-red-600">Le D.</strong>, Park BR., Kim M. (2018).
                        Distinct mechanisms coordinate transcription and translation under
                        carbon and nitrogen starvation in Escherichia coli.
                        <em className="text-gray-700">Nat Microbiol</em>, 3(6):741-748.
                        <a href="https://doi.org/10.1038/s41564-018-0161-3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            doi: 10.1038/s41564-018-0161-3
                        </a>. PMID: 29760462.
                    </li>
                    <li>
                        Ha T., Moon KH., <strong className="text-red-600">Le D.</strong>, Hatakeyama J., Yoon K., Park HS., Kong YY., Shimamura K., Kim JW. (2017).
                        The Retinal Pigment Epithelium Is a Notch Signaling Niche in the Mouse Retina.
                        <em className="text-gray-700">Cell Rep</em>, 19(2):351-363.
                        <a href="https://doi.org/10.1016/j.celrep.2017.03.040" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            doi: 10.1016/j.celrep.2017.03.040
                        </a>. PMID: 28402857.
                    </li>
                    <li>
                        Coates J.*, Park B.*, <strong className="text-red-600">Le D.</strong>, Simsek E., Chaudhry W., Kim M. (2018).
                        Antibiotic-Induced Population Fluctuations and Stochastic Clearance of Bacteria.<em className="text-gray-700">eLife</em>, 7: e32976.
                        <a href="https://doi.org/10.7554/eLife.32976" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            https://doi.org/10.7554/eLife.32976
                        </a>.
                    </li>
                    <li>
                        Kim NS., Min KW., Kang KH., Lee EJ., Kim HT., Moon K., Choi J., <strong className="text-red-600">Le D.</strong>, Lee SH., Kim JW. (2014).
                        Regulation of Retinal Axon Growth by Secreted Vax1 Homeodomain Protein.
                        <em className="text-gray-700">eLife</em>, 3: e02671.
                        <a href="https://doi.org/10.7554/eLife.02671" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                            https://doi.org/10.7554/eLife.02671
                        </a>.
                    </li>
                </ul>
            </div>
        </div>
    );
}
